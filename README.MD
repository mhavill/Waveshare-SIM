
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

# Issues in Demo Code

ESP32-S3-A-SIM7670X-4G-example
- USB hub definitions seem to be wrong for this hardware - selected custom board rather than 


CameraWebServer

- why are they using Softwate Serial wihen there are so many UARTs on the board?

AP

bat

- incorrect addressing of MAX17048 chip
- Useless if conditiontest and code

bin

- no source code for this example

RGB

LCD

- Why is this there? there is no LCD

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
