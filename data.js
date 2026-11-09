/* ข้อมูลคู่มือทั้งหมด — แก้ข้อความ เพิ่ม/ลบขั้นตอนได้ที่ไฟล์นี้
   t = ชื่อหัวข้อ, d = รายการขั้นตอน, c = กล่องโค้ด, n = คำแนะนำ, w = ข้อควรระวัง
   รูปภาพ: วางไฟล์ในโฟลเดอร์ images/ ตั้งชื่อ cat1-1.png (หมวด1 ขั้นตอนที่1), cat1-2.png ...
   หลายรูป: cat1-1.png, cat1-1-2.png, cat1-1-3.png ... (รูปที่ 2 เป็นต้นไปต่อท้าย -2, -3)
   หรือกำหนดเองด้วย imgs:["images/a.jpg","images/b.jpg"] ในขั้นตอนนั้น */
const C = [
  {
    "id": "cat1",
    "ic": "🖥️",
    "t": "การตั้งค่าระบบ Windows",
    "ds": "ตั้งค่าพื้นฐานของระบบปฏิบัติการ",
    "s": [
      {
        "t": "ตั้งค่า Taskbar",
        "d": [
          "เข้า Taskbar Setting",
          "ปิดไอคอนให้เหลือเฉพาะ Search (ค้นหา)",
          "ปรับ Taskbar alignment ให้อยู่ซ้ายสุด (Left)"
        ]
      },
      {
        "t": "ปิด Lock Screen",
        "d": [
          "ปิด Lock screen"
        ]
      },
      {
        "t": "ตั้งค่า Region และ Language",
        "d": [
          "ตั้งค่า Region : ไทย (Format: Thai (Thailand))",
          "ตั้งค่า Language : ไทย"
        ]
      },
      {
        "t": "ตั้งค่า Time Zone",
        "d": [
          "ตั้งค่า Time zone : (UTC+07:00) Bangkok, Hanoi, Jakarta",
          "ตั้งค่าเวลาและวันที่ให้ถูกต้อง"
        ]
      },
      {
        "t": "ตั้งค่า User Account Control",
        "d": [
          "เข้า Control Panel > User Accounts",
          "ไปที่ Change User Account Control settings",
          "เลื่อนลงมาล่างสุด (Never notify)"
        ]
      },
      {
        "t": "จัดการ Disk Management",
        "d": [
          "เข้า Disk Management",
          "คลิกขวาไดร์ C กด Shrink Volume",
          "ขนาดไม่เกิน 20 GB",
          "เปลี่ยนชื่อโดยคลิกขวา Properties: ไดร์ C ชื่อ OS, ไดร์ D ชื่อ DATA"
        ],
        "w": "ขนาด Shrink Volume ต้องไม่เกิน 20 GB"
      },
      {
        "t": "ตั้งชื่อเครื่องและ Workgroup",
        "d": [
          "เข้า System > About > Domain or workgroup",
          "กด Change",
          "ตั้งชื่อเครื่อง = TJ_รหัสสาขา",
          "Workgroup = BIS"
        ],
        "n": "เครื่องสำรองใช้ชื่อ TJ_0"
      },
      {
        "t": "ตั้งค่าปุ่มสลับภาษา",
        "d": [
          "เข้า Settings > Time & Language > Typing",
          "Advanced keyboard settings > Input language hot keys",
          "กด Change Key Sequence",
          "ปรับให้ Switch โดยใช้ตัวหนอน (Grave Accent ( ` ))"
        ]
      }
    ]
  },
  {
    "id": "cat2",
    "ic": "🖨️",
    "t": "การตั้งค่าเพิ่มเติม",
    "ds": "Hosts เครื่องพิมพ์ และ Chrome",
    "s": [
      {
        "t": "Block YouTube ผ่านไฟล์ Hosts",
        "d": [
          "เปิดโฟลเดอร์ BLOCK > Host คัดลอกด้านบนสุด (ยกเว้นดอกจัน*)",
          "เปิด Notepad แบบ Run as administrator",
          "คลิก File > Open นำที่อยู่โฟลเดอร์ที่คัดลอกไว้วางในช่อง Address Bar",
          "ปรับเป็น All Files จากนั้นคลิกที่ hosts กด Open",
          "นำลิงก์ยูทูปมาวาง",
          "กด File > Save as ปรับเป็น All files คลิกที่ hosts กด Save"
        ],
        "c": "127.0.0.1    https://www.youtube.com\n127.0.0.1    www.youtube.com",
        "w": "ต้องเปิด Notepad แบบ Run as administrator มิฉะนั้นจะบันทึกไฟล์ hosts ไม่ได้"
      },
      {
        "t": "ติดตั้งเครื่องพิมพ์ Epson TM-T82",
        "d": [
          "เปิดโฟลเดอร์ PRINTERSETUP > T-T82 แล้วเปิดไฟล์ที่ขึ้นมา",
          "กด Next แล้วกด Add",
          "Select driver เลือก EPSON TM-T82 Receipt - South Asian",
          "กด Next จนเสร็จ",
          "ให้ลบเหลือแค่ (TM-T82)"
        ],
        "n": "Port Type: Share with EPSON TM-T82 Receipt และติ๊ก Set as Default Printer"
      },
      {
        "t": "ตั้งค่าขนาดกระดาษ 58 mm",
        "d": [
          "เข้า Printing preferences > Layout",
          "ปรับขนาดให้เป็น 58 mm ทั้งสองช่อง"
        ],
        "n": "Paper Size: Roll Paper 58 x 297 mm และ Output Paper: 58mm Roll Paper"
      },
      {
        "t": "ตั้งค่า QR Code",
        "d": [
          "ไปที่ 2D Code",
          "ตรง Type ปรับให้เป็น QR Code"
        ]
      },
      {
        "t": "ตั้งค่า Module Width",
        "d": [
          "กด Advanced settings",
          "ปรับ Module Width ให้เป็น 5"
        ]
      },
      {
        "t": "ตั้งค่า Cash Drawer",
        "d": [
          "เข้า Document Settings > Cash Drawer",
          "ปรับให้เป็น Open before printing"
        ],
        "n": "ตั้งทั้ง Cash Drawer #1 (2 Pins) และ #2 (5 Pins)"
      },
      {
        "t": "ติดตั้งและตั้งค่า Google Chrome",
        "d": [
          "ติดตั้งด้วย ChromeSetup",
          "ตั้งเป็นค่าเริ่มต้น",
          "ตั้งค่าเป็นภาษาไทย",
          "ปิดการบันทึกรหัสผ่าน"
        ]
      }
    ]
  },
  {
    "id": "cat3",
    "ic": "📲",
    "t": "การติดตั้ง POS_Web และแอปพลิเคชันเสริม",
    "ds": "โปรแกรมรีโมทและแอปของสาขา",
    "s": [
      {
        "t": "ติดตั้ง AnyDesk",
        "d": [
          "ลงโปรแกรมรีโมท AnyDesk",
          "เมื่อติดตั้งเสร็จ เข้า Settings > Security > Unlock Security Settings",
          "กด Set password for unattended access",
          "ตั้งรหัส AnyDesk = password111"
        ]
      },
      {
        "t": "ติดตั้ง TeamViewer",
        "d": [
          "คลิกอันที่ 2 Installation",
          "คลิกอันที่ 2 Personal",
          "ตั้งชื่อเครื่อง + ตั้งรหัส TeamViewer = password",
          "ติ๊ก I don’t want to create a TeamViewer account now"
        ]
      },
      {
        "t": "ตั้งค่าภาษา TeamViewer เป็นภาษาไทย",
        "d": [
          "เมื่อขึ้นหน้าโปรแกรม ไปที่ Extras > Options > Advanced",
          "ไปที่ Display language เปลี่ยนให้เป็นไทย"
        ]
      },
      {
        "t": "ติดตั้ง POS Web เป็นแอปพลิเคชัน",
        "d": [
          "เปิดไฟล์ติดตั้ง WEB POS",
          "คัดลอกลิงก์ไปวางใน Google Chrome",
          "กดสามจุด > แคสต์ บันทึก และแชร์",
          "กด ติดตั้งหน้าเว็บนี้เป็นแอป"
        ]
      },
      {
  "t": "ติดตั้ง tuenjai APP & Web, ระบบลงเวลา, Odoo และ tuenjai System",
  "d": [
    "ติดตั้ง tuenjai APP & Web",
    "ติดตั้งระบบลงเวลา",
    "ติดตั้ง Odoo และ tuenjai System",
    "ทุกตัวทำเหมือนกับ POS Web"
  ]
},
      {
        "t": "ตั้งค่า --kiosk-printing",
        "d": [
          "คลิกขวาที่ไอคอนแอปหน้าจอ เลือก Properties",
          "ไปที่ช่อง Target: หลังสุด เว้นวรรค 2 ครั้ง",
          "ใส่ --kiosk-printing แล้วกด OK",
          "ทำเหมือนกันทั้งหมด จากที่ติดตั้งมาจาก Google Chrome รวมถึง Google Chrome ด้วย"
        ],
        "c": "--kiosk-printing"
      }
    ]
  },
  {
    "id": "cat4",
    "ic": "📶",
    "t": "การใช้งานบริการเพิ่มเติม",
    "ds": "ดิสก์ Wi-Fi และ Network",
    "s": [
      {
        "t": "ปิดการจัดเรียงดิสก์อัตโนมัติ",
        "d": [
          "คลิกขวาไดร์ C > Properties > Tools > Optimize",
          "กด Change settings",
          "กดติ๊กถูกออก (Run on a schedule)",
          "กด OK"
        ]
      },
      {
        "t": "ปิดการมองเห็น Wi-Fi TJ และ TJ5G",
        "d": [
          "คลิกเปิดโฟลเดอร์ WIFI",
          "คัดลอกไปวางใน Command Prompt"
        ],
        "c": "netsh wlan add filter permission=block ssid=\"TJ\" networktype=infrastructure\nnetsh wlan add filter permission=block ssid=\"TJ5G\" networktype=infrastructure",
        "w": "ต้องเปิด Command Prompt แบบ Run as administrator ถ้าไม่ทำจะเกิด error 5 (requires elevation)"
      },
      {
        "t": "ตั้งค่า Wi-Fi Adapter",
        "d": [
          "เข้า Network and Internet > Network and Sharing Center",
          "เลือก Change adapter settings",
          "คลิกขวา WIFI กด Properties"
        ]
      },
      {
        "t": "ตั้งค่า IPv4 และ IPv6",
        "d": [
          "ใน Properties ของ WIFI ติ๊กถูก IPV4 และ IPV6 ออก",
          "กด OK"
        ]
      }
    ]
  }
];
