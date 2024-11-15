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
      }
    }
  }
//  Serial.println("Timeout!");
  return false;
}

void setup() {
  Serial.begin(115200);
  Serial1.begin(GPSBaud, SERIAL_8N1, RXPin, TXPin);

  while (!SentMessage("AT", 2000)) {
    delay(1000);
  }
  
  SentMessage("ATD10086;");
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
