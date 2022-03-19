/** 
 * @file yfrobot
 * @brief YFROBOT's 4wd mcnam whell smart car Mind+ library.
 * @n This is a MindPlus graphics programming extension for YFROBOT's module.
 * 
 * @copyright    YFROBOT,2022
 * @copyright    MIT Lesser General Public License
 * 
 * @author [email](yfrobot@qq.com)
 * @date  2022-03-18
*/

enum MWDIR {
    //% block="FORWARD"
    0,
    //% block="BACK OFF"
    1,
    //% block="RIGHT ROTATION"
    2,
    //% block="LEFT ROTATION"
    3,
    //% block="RIGHT TRANSLATION"
    4,
    //% block="LEFT TRANSLATION"
    5,
    //% block="MOVE RIGHT FORWARD"
    6,
    //% block="MOVE LEFT FORWARD"
    7,
    //% block="MOVE RIGHT BACK"
    8,
    //% block="MOVE LEFT BACK"
    9

}

enum MWADDRESS {
    //% block="D0"
    D0,
    //% block="D2"
    D2,
    //% block="D4"
    D4,
    //% block="D6"
    D6,
    //% block="D8"
    D8,
    //% block="DA"
    DA,
    //% block="DC"
    DC,
    //% block="DE"
    DE,
    //% block="E0"
    E0,
    //% block="E2"
    E2,
    //% block="E4"
    E4,
    //% block="E6"
    E6,
    //% block="E8"
    E8,
    //% block="EA"
    EA,
    //% block="EC"
    EC,
    //% block="EE"
    EE,
    //% block="F8"
    F8,
    //% block="FA"
    FA,
    //% block="FC"
    FC,
    //% block="FE"
    FE,             
}

//% color="#45b787" iconWidth=50 iconHeight=40
namespace mwrobot {

    //% block="4wd MW robot M1 [SPEEDM1] M2 [SPEEDM2] M3 [SPEEDM3] M4 [SPEEDM4] " blockType="command"
    //% SPEEDM1.shadow="range"   SPEEDM1.params.min=-255    SPEEDM1.params.max=255    SPEEDM1.defl=200
    //% SPEEDM2.shadow="range"   SPEEDM2.params.min=-255    SPEEDM2.params.max=255    SPEEDM2.defl=200
    //% SPEEDM3.shadow="range"   SPEEDM3.params.min=-255    SPEEDM3.params.max=255    SPEEDM3.defl=200
    //% SPEEDM4.shadow="range"   SPEEDM4.params.min=-255    SPEEDM4.params.max=255    SPEEDM4.defl=200
    export function MWDrive(parameter: any, block: any) {
        let speedM1 = parameter.SPEEDM1.code;
        let speedM2 = parameter.SPEEDM2.code;
        let speedM3 = parameter.SPEEDM3.code;
        let speedM4 = parameter.SPEEDM4.code;

        Generator.addInclude(`definemwmotor`, `PROGMEM void mwMotorDrive(int m1Speed, int m2Speed, int m3Speed, int m4Speed); // 麦轮电机控制函数`)
        Generator.addInclude(`definemwmotorFun`, `/*\n`+
            `  麦轮驱动电机函数\n`+
            `  参数:m1Speed - 1电机速度 m2Speed - 2电机速度\n`+
            `       m3Speed - 3电机速度 m4Speed - 4电机速度 (取值范围：-255 ~ 255)\n`+
            `*/\n`+
            `void mwMotorDrive(int m1Speed, int m2Speed, int m3Speed, int m4Speed) {\n`+
            `  if (m1Speed > 0)\n`+
            `    digitalWrite(M1PinDir, LOW);\n`+
            `  else if (m1Speed < 0)\n`+
            `    digitalWrite(M1PinDir, HIGH);\n`+
            `  analogWrite(M1PinSpeed, abs(m1Speed));\n`+
            `  \n`+
            `  if (m2Speed > 0)\n`+
            `    digitalWrite(M2PinDir, HIGH);\n`+
            `  else if (m2Speed < 0)\n`+
            `    digitalWrite(M2PinDir, LOW);\n`+
            `  analogWrite(M2PinSpeed, abs(m2Speed));\n`+
            `  \n`+
            `  if (m3Speed > 0)\n`+
            `    digitalWrite(M3PinDir, LOW);\n`+
            `  else if (m3Speed < 0)\n`+
            `    digitalWrite(M3PinDir, HIGH);\n`+
            `  analogWrite(M3PinSpeed, abs(m3Speed));\n`+
            `  \n`+
            `  if (m4Speed > 0)\n`+
            `    digitalWrite(M4PinDir, HIGH);\n`+
            `  else if (m4Speed < 0)\n`+
            `    digitalWrite(M4PinDir, LOW);\n`+
            `  analogWrite(M4PinSpeed, abs(m4Speed));\n`+
            `}`
        );

        Generator.addCode(`mwMotorDrive(${speedM1},${speedM2},${speedM3},${speedM4});`);
    }

    //% block="4wd MW robot [DIR] at [SPE] speed" blockType="command"
    //% DIR.shadow="dropdown" DIR.options="MWDIR" ADDR.defl="MWDIR.FORWARD"
    //% SPE.shadow="range"   SPE.params.min=0    SPE.params.max=255    SPE.defl=200
    export function MWMove(parameter: any, block: any) {

        let dir = parameter.DIR.code;
        let spe = parameter.SPE.code;

        Generator.addInclude(`definemwmotor`, `PROGMEM void mwMotorDrive(int m1Speed, int m2Speed, int m3Speed, int m4Speed); // 麦轮电机控制函数`)
        Generator.addInclude(`definemwmotorFun`, `/*\n`+
            `  麦轮驱动电机函数\n`+
            `  参数:m1Speed - 1电机速度 m2Speed - 2电机速度\n`+
            `       m3Speed - 3电机速度 m4Speed - 4电机速度 (取值范围：-255 ~ 255)\n`+
            `*/\n`+
            `void mwMotorDrive(int m1Speed, int m2Speed, int m3Speed, int m4Speed) {\n`+
            `  if (m1Speed > 0)\n`+
            `    digitalWrite(M1PinDir, LOW);\n`+
            `  else if (m1Speed < 0)\n`+
            `    digitalWrite(M1PinDir, HIGH);\n`+
            `  analogWrite(M1PinSpeed, abs(m1Speed));\n`+
            `  \n`+
            `  if (m2Speed > 0)\n`+
            `    digitalWrite(M2PinDir, HIGH);\n`+
            `  else if (m2Speed < 0)\n`+
            `    digitalWrite(M2PinDir, LOW);\n`+
            `  analogWrite(M2PinSpeed, abs(m2Speed));\n`+
            `  \n`+
            `  if (m3Speed > 0)\n`+
            `    digitalWrite(M3PinDir, LOW);\n`+
            `  else if (m3Speed < 0)\n`+
            `    digitalWrite(M3PinDir, HIGH);\n`+
            `  analogWrite(M3PinSpeed, abs(m3Speed));\n`+
            `  \n`+
            `  if (m4Speed > 0)\n`+
            `    digitalWrite(M4PinDir, HIGH);\n`+
            `  else if (m4Speed < 0)\n`+
            `    digitalWrite(M4PinDir, LOW);\n`+
            `  analogWrite(M4PinSpeed, abs(m4Speed));\n`+
            `}`
        );

        if(dir == `0`){
            Generator.addCode(`mwMotorDrive(${spe},${spe},${spe},${spe});`);
        }else if(dir == `1`){
            Generator.addCode(`mwMotorDrive(0-${spe},0-${spe},0-${spe},0-${spe});`);
        }else if(dir == `2`){
            Generator.addCode(`mwMotorDrive(${spe},0-${spe},${spe},0-${spe});`);
        }else if(dir == `3`){
            Generator.addCode(`mwMotorDrive(0-${spe},${spe},0-${spe},${spe});`);
        }else if(dir == `4`){
            Generator.addCode(`mwMotorDrive(${spe},0-${spe},0-${spe},${spe});`);
        }else if(dir == `5`){
            Generator.addCode(`mwMotorDrive(0-${spe},${spe},${spe},0-${spe});`);
        }else if(dir == `6`){
            Generator.addCode(`mwMotorDrive(${spe},0,0,${spe});`);
        }else if(dir == `7`){
            Generator.addCode(`mwMotorDrive(0,${spe},${spe},0);`);
        }else if(dir == `8`){
            Generator.addCode(`mwMotorDrive(0,0-${spe},0-${spe},0);`);
        }else if(dir == `9`){
            Generator.addCode(`mwMotorDrive(0-${spe},0,0,0-${spe});`);
        }
    }
        
    //% block="4wd MW robot STOP" blockType="command"
    export function MWStop(parameter: any, block: any) {
        Generator.addInclude(`definemwmotor`, `PROGMEM void mwMotorDrive(int m1Speed, int m2Speed, int m3Speed, int m4Speed); // 麦轮电机控制函数`)
        Generator.addInclude(`definemwmotorFun`, `/*\n`+
            `  麦轮驱动电机函数\n`+
            `  参数:m1Speed - 1电机速度 m2Speed - 2电机速度\n`+
            `       m3Speed - 3电机速度 m4Speed - 4电机速度 (取值范围：-255 ~ 255)\n`+
            `*/\n`+
            `void mwMotorDrive(int m1Speed, int m2Speed, int m3Speed, int m4Speed) {\n`+
            `  if (m1Speed > 0)\n`+
            `    digitalWrite(M1PinDir, LOW);\n`+
            `  else if (m1Speed < 0)\n`+
            `    digitalWrite(M1PinDir, HIGH);\n`+
            `  analogWrite(M1PinSpeed, abs(m1Speed));\n`+
            `  \n`+
            `  if (m2Speed > 0)\n`+
            `    digitalWrite(M2PinDir, HIGH);\n`+
            `  else if (m2Speed < 0)\n`+
            `    digitalWrite(M2PinDir, LOW);\n`+
            `  analogWrite(M2PinSpeed, abs(m2Speed));\n`+
            `  \n`+
            `  if (m3Speed > 0)\n`+
            `    digitalWrite(M3PinDir, LOW);\n`+
            `  else if (m3Speed < 0)\n`+
            `    digitalWrite(M3PinDir, HIGH);\n`+
            `  analogWrite(M3PinSpeed, abs(m3Speed));\n`+
            `  \n`+
            `  if (m4Speed > 0)\n`+
            `    digitalWrite(M4PinDir, HIGH);\n`+
            `  else if (m4Speed < 0)\n`+
            `    digitalWrite(M4PinDir, LOW);\n`+
            `  analogWrite(M4PinSpeed, abs(m4Speed));\n`+
            `}`
        );

        Generator.addCode(`mwMotorDrive(0,0,0,0);`);
    }
    
    //% block="read ulrasonic sensor address [ADDR] Unit mm" blockType="reporter"
    //% ADDR.shadow="dropdown" ADDR.options="MWADDRESS" ADDR.defl="MWADDRESS.E8"
    export function readUlrasonicSensor_sr09(parameter: any, block: any) {

        let addr = parameter.ADDR.code;
        Generator.addInclude(`Wire`, `#include <Wire.h>`)

        Generator.addInclude(`definemwsr09send`, `PROGMEM void SR09_send_command(byte address, byte reg, byte command); // SR09 写指令`)
        Generator.addInclude(`definemwsr09sendFun`, `// 写指令\n`+
            `void SR09_send_command(byte address, byte reg, byte command) {  // send the command to SR09\n`+
            `  Wire.beginTransmission(address);    // start the transmission with SR09\n`+
            `  Wire.write(reg);                    // register 2\n`+
            `  Wire.write(command);                // send the command to the register 2\n`+
            `  Wire.endTransmission();             // end of transmission\n`+
            `}`
        );

        Generator.addInclude(`definemwsr09read`, `PROGMEM word SR09_read_data(byte address, byte reg, byte command); // SR09 读数据`)
        Generator.addInclude(`definemwsr09readFun`, `// 读数据\n`+
            `word SR09_read_data(byte address, byte reg, byte command) { // sending the command and read the data in the register\n`+
            `  word temp_reading;\n`+
            `  // step 1: instruct sensor to read echoes\n`+
            `  SR09_send_command(address, reg, command);           // send the command\n`+
            `  // step 2: wait for readings to happen\n`+
            `  delay(88);                          // wait at least 87 milliseconds\n`+
            `  // step 3: instruct sensor to return a particular echo reading\n`+
            `  Wire.beginTransmission(address);    // start to transmit with SR09\n`+
            `  Wire.write(0x02);             // register 2 is the gate of receiving the data\n`+
            `  Wire.endTransmission();             // stop transmitting\n`+
            `  // step 4: request reading from sensor\n`+
            `  Wire.requestFrom(uint8_t(address), uint8_t(2));       // request the data in the 2nd and third register of SR09\n`+
            `  // step 5: receive reading from sensor\n`+
            `  while ( Wire.available() < 2) {}    // wait the register available\n`+
            `  temp_reading = (Wire.read()) << 8;  // read register 2 and shift it to upper byte.\n`+
            `  temp_reading |= Wire.read();        // read the register 3 to lower byte\n`+
            `  return temp_reading;                // return as a 16bit data\n`+
            `}`
        );
        Generator.addSetup(`sr09_init`, `SR09_send_command(0x${addr}>>1, 0x02, 0X71);   // powered by USB`);

        Generator.addCode(`SR09_read_data(0x${addr}>>1, 0x02, 0xBC);`);
    }

}
