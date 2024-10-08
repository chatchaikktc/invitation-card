# KTC Digital Card 

URL : https://github.com/chatchaikktc/ktc-digital-card-app.git

# วิธีติดตั้ง เครื่อง localhost เพื่อใช้ในการ Developer

1. clone file จาก https://github.com/chatchaikktc/ktc-digital-card-app.git
2. ทำการติดตั้ง Module ที่จำเป็นต้องใช้งาน โดยใช้คำสั่ง

```shell
$ npm i
```

3. เมื่อติดตั้ง Module เรียบร้อยแล้วให้ลอง Run โดยใช้คำสั่ง

```shell
$ npm run dev
```

จากนั้น เปิด Browser แล้วใช้ URL http://localhost:4040

# การ Update Content

1. ส่วนที่เป็น Static 
   - Hero Banner
   - Key Visual
   - what's Digital Card

จะแก้จากไฟล์ th.ts (เฉพาะ ภาษาไทย) en.ts (เฉพาะ ภาษาอังกฤษ)
โดยไฟล์จะถูกจัดเก็บที่ Path : src > data > translations

2. ส่วนที่เป็น Dynamic
   - VDO How to use  แก้จากไฟล์ที่มีชื่อว่า video-list.json ใน Path : src > data

   อธิบาย JSON ที่ใช้ในการแก้
   ```shell
   {
            "vid" : 1, //หมายเลขอ้างอิง ให้ใส่เป็น runing number
            "title" : "ดูข้อมูลบัตร", // ชื่อของ Video
            "panel_link" : "ViewCardInfo", // กำหนด link เพื่อให้ปุ่มกดกับตัววิดีโอสัมพันธ์กัน โดยชื่อจะต้องไม่ซ้ำกัน
            "suggest" : true, // ใส่ true หรือ false เพื่อกำหนดให้แสดงปุ่ม ด้านบนกรอบของ Video โดย true หมายถึงให้ แสดง และ false  หมายถึงไม่แสดง
            "youtube_id" : "lwjpC9qajuc", // Youtube ID โดยนำมาจาก Link ของ Youtube https://youtu.be/lwjpC9qajuc
            "thumbnail" : "/img/Youtube-Cover-View-Card-Info.webp", // วิดีโอ Cover
            "active" :  true //  ใส่ true หรือ false เพื่อให้เป็นค่าเริ่มต้นของวิดีโอ ถ้าใส่ true หมายความว่าให้เริ่มต้นแสดงวิดีโอนี้เป็นวิดีโอแรก
        }
   ```

   - How to use ประกอบไปด้วย 3 ส่วนดังนี้
      - Tab Menu โดยใช้ไฟล์ howto-menu.json ในการแก้ไข ใน  Path : src > data
        ```shell
                 {
            "hm_id": 1, //หมายเลขอ้างอิง ให้ใส่เป็น runing number
            "title": "เปิดใช้งานบัตร Digital", //ชือของ Menu
            "link": "activate-digital-card", //กำหนด link
            "active": "active", //ใส่ active หรือ inactive โดย active หมายตวามว่า ให้ active ปุ่มสีแดง ตามที่กำหนด
            "has video": //true, ใส่ true หรือ false เพื่อกำหนดว่า ลิงค์นี้มีวิดีโอหรือไม่ ถ้ามีให้ใส่ true ไม่มีให้ใส่ false
            "video_link": "https://www.youtube.com/embed/9QY5X0ZQ4qo" //ลิงค์วิดีโอ
        },
        ```