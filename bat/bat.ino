#include <Arduino.h>
#include <Wire.h>

#define MAX17048_I2C_ADDRESS 0x36

void setup()
{
  Wire.begin(3, 2);
  Serial.begin(115200);
}

void loop()
{

  Wire.beginTransmission(MAX17048_I2C_ADDRESS);
  Wire.write(0x02);
  Wire.endTransmission();
  Wire.requestFrom(MAX17048_I2C_ADDRESS, 2);
  uint16_t volt = (Wire.read() << 8) | Wire.read();
  float batteryVolt = (float)volt * 78.125 / 1000000;

  Wire.beginTransmission(MAX17048_I2C_ADDRESS);
  Wire.write(0x04);
  Wire.endTransmission();
  Wire.requestFrom(MAX17048_I2C_ADDRESS, 2);
  uint16_t soc = (Wire.read() << 8) | Wire.read();
  if (soc > 65535) // How could this be with 16 bits?
  {
    soc = 65535;
  }
  float batteryLevel = (float)soc / 256;

  Wire.beginTransmission(MAX17048_I2C_ADDRESS);
  Wire.write(0x16);
  Wire.endTransmission();
  Wire.requestFrom(MAX17048_I2C_ADDRESS, 2);
  uint16_t crate = (Wire.read() << 8) | Wire.read();
  Serial.print("CRate value: ");
  Serial.print(crate);
  Serial.println("");
  float batterycrate = (float)crate * 0.208;

  Serial.print("Battery Voltage: ");
  Serial.print(batteryVolt);
  Serial.println("v");

  Serial.print("Battery Level: ");
  Serial.print(batteryLevel);
  Serial.println("%");

  Serial.print("Battery CRate: ");
  Serial.print(batterycrate);
  Serial.println("%/hr");

  delay(1000);
}