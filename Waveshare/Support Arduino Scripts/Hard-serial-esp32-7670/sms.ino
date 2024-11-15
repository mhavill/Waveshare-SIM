#include <Arduino.h>

static const int RXPin = 17, TXPin = 18;
static const uint32_t GPSBaud = 115200;

String rev;

void SentSerial(const char *p_char) {
  for (int i = 0; i < strlen(p_char); i++) {
    Serial1.write(p_char[i]);
    delay(10);
  }
  Serial1.write('\r');
  delay(10);
  Serial1.write('\n');
  delay(10);
}

bool SentMessage(const char *p_char, unsigned long timeout = 2000) {
  SentSerial(p_char);

  unsigned long start = millis();
  while (millis() - start < timeout) {
    if (Serial1.available()) {
      rev = Serial1.readString();
      if (rev.indexOf("OK") != -1) {
        Serial.println("Got OK!");
        return true;
      } else if (rev.indexOf("ERROR") != -1) {
        Serial.println("Got ERROR!");
        return false;
      }
    }
  }
  Serial.println("Timeout!");
  return false;
}

void setup() {
  Serial.begin(115200);
  Serial1.begin(GPSBaud, SERIAL_8N1, RXPin, TXPin);

  // Initialize GSM module and set up SMS mode
  while (!SentMessage("AT", 2000)) {
    delay(1000);
  }
  
  // Set SMS text mode
  SentMessage("AT+CMGF=1");

  // Send an SMS to the number 10086 with the message "This is a test message."
  SentMessage("AT+CMGS=\"10086\"");
  SentSerial("This is a test message.");
  Serial1.write(0x1A); // Send CTRL+Z to end the message
  delay(1000); // Give it some time to process

  // Check for existing messages
  SentMessage("AT+CMGL=\"ALL\"");

  // Read the 20th message
  SentMessage("AT+CMGR=20");

  // Delete the 20th message
  SentMessage("AT+CMGD=20");

  // Send AT commands to check module status
  SentSerial("ATE1;");
  SentSerial("AT+COPS?");
  SentSerial("AT+CGDCONT?");
  SentSerial("AT+SIMCOMATI");
}

void loop() {
  if (Serial1.available()) {
    rev = Serial1.readString();
    Serial.println(rev);
  }
}
