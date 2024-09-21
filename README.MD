
# Thoughts and Observations on the WaveShare ESP32-S3-SIM7670G-4G

Having bought this board, I found that the documentation was lacking critical information and the demo software had bugs.

The aim of this is to share the observations with others and eventually with Waveshare so that others can benefit from the work done.

## Documentation

[Waveshare Documentation](https://www.waveshare.com/wiki/ESP32-S3-SIM7670G-4G)  

### Reversed Engineered [Diagrams](/Diagrams/)

### Data Sheets

- FSUSB42 [Low-Power, Two-Port, High-Speed,USB2.0 (480Mbps) UART Switch](https://www.farnell.com/datasheets/2299789.pdf)
- CH334 and CH335 [USB2.0 protocol compliant 4-port USB HUB](https://static.klayers.net/pdf/2308/CH334DS1-Qinheng_KL-024-0000879.pdf)
- CH343 [USB to High-Speed Serial Chip CH343](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.wch-ic.com/downloads/file/296.html&ved=2ahUKEwio6cjA5MCGAxXXbmwGHR4XAc0QFnoECAsQAQ&usg=AOvVaw0A96-5ImuwCusa5MEP8zfA)
- EA3036C [3CH power management IC for applications powered by one Li-Ion battery or a DC 5V adapter](http://www.everanalog.com/Product/ProductEA3036CDetailInfo.aspx)
- ESP32-S3 [Series Datasheet](https://www.espressif.com/en/support/documents/technical-documents?keys=&field_type_tid%5B%5D=842)
- MAX17048/MAX17049 [3μA 1-Cell/2-Cell Fuel Gauge with ModelGauge](https://www.analog.com/media/en/technical-documentation/data-sheets/MAX17048-MAX17049.pdf)
- Espressif Regitry - [usb_cdc_4g_module README](https://components.espressif.com/components/espressif/iot_usbh_modem/versions/0.1.6/examples/usb_cdc_4g_module?language=)

# Issues in Demo Code

ESP32-S3-A-SIM7670X-4G-example

- USB hub definitions seem to be wrong for this hardware - selected custom board rather than default in the example.
- Modem Channel connections wrong
- security  of wifi AP updated
- app in chinese - translated now to English
- Performance about 30% speed of commercial mifi!!!

CameraWebServer

- why are they using Softwate Serial wihen there are so many UARTs on the board?

AP

bat

- incorrect addressing of MAX17048 chip
- Useless if condition test and code

bin

- no source code for this example
- these bin files are used if you'd like to use the portable wifi demo referenced in the waveshare wiki. You will need to flash these procompiled programs straight to the esp32, more info on the wiki

RGB

LCD

- for Waveshares ESP32-S3-Touch-LCD-4.3, not used with this board

# Contact with WaveShare Support

I wrote:May 29, 2024, 04:40 UTC
Having received the order, I have been working through the demonstration code and examples with mixed success.
1) However, I suspect that some of my issues experienced are due to lacking information on the DIP switch settings and how they should be set for each example. Can you direct me to the information about the switch settings?
2) I have flashed the binary code for the 'Portable WiFi demo' which has worked successfully. Can you point me to the source code for this demo as I would like to change the SSID, Passcode and WiFi encryption which are security weaknesses? 

They replied:
1)DIP switch
CAM: Control to turn on or off the camera function
HUB: Control USB HUB driver circuit power supply
4G: Control A7670E module power supply
USB: Control A7670E module USB channel selection
 
2） The following is the source code, which can be used to adjust SSID, password, and WiFi encryption：
[sample demo](https://files.waveshare.com/wiki/ESP32-S3-A7670E-4G/ESP32-S3-A-SIM7670X_4G.zip)
Best wish!

 
Visitor 693680106914



# ANTHING BELOW THIS LINE IS IN DEVELOPMENT[!]

---------------------------------------------------------------

## Features

- Accessibility in VS Code  
- Download directly to project root  
- Live Previews

## Lessons Learned

- for using board with PIO I had to create a new board definition and a variant for pins

What did you learn while building this project? What challenges did you face and how did you overcome them?  

## Screenshots

![App Screenshot](https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png)  

## Demo

Insert gif or link to demo  

## Acknowledgements

- [Readme.so](https://github.com/octokatherine/readme.so)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)  
