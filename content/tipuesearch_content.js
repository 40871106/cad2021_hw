var tipuesearch = {"pages": [{'title': 'about', 'text': "In this semester's computer-aided design internship, each student is required to create a personal homework warehouse and web page according to the format of this HW template. \n \n 40871106 \n Website storage:  https://github.com/40871106/cad2021_hw \n Website link:  https://40871106.github.io/cad2021_hw/content/index.html \n \n", 'tags': '', 'url': 'about.html'}, {'title': 'Task1', 'text': '\n data = open("cad2021_2b_w2_list.txt").readlines()  \ndata = data[1:]  \nfor i in range(len(data)):  \n\xa0\xa0\xa0\xa0num_github = data[i]  \n\xa0\xa0\xa0\xa0num = num_github.split("\\t")[ 0]  \n\xa0\xa0\xa0\xa0account = num_github.split("\\t")[1]  \n\xa0\xa0\xa0\xa0if account == "":  \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0account = num  \n\xa0\xa0\xa0\xa0print("<p><span><a href=\'https://github.com/"+ str(account) +"/cad2021_hw\'> "+ str(num)+"</a> "+ "<a href=\'https://" +str(account) + ".github.io/cad2021_hw\'> "+ str(num) + "</a></span></p>") \n \n \n cad2021 2b each student\'s warehouse and website \n 40723126 \xa0 \n 40723135 \xa0 \n 40723217 \xa0 \n 40732331 \xa0 \n 40823114 \xa0 \n 40823115 \xa0 \n 40823117 \xa0 \n 40823119 \xa0 \n 40823122 \xa0 \n 40823127 \xa0 \n 40823146 \xa0 \n 40823148 \xa0 \n 40823215 \xa0 \n 40871106 \xa0 \n 40923201 \xa0 \n 40923203 \xa0 \n 40923204 \xa0 \n 40923205 \xa0 \n 40923206 \xa0 \n 40923207 \xa0 \n 40923208 \xa0 \n 40923209 \xa0 \n 40923210 \xa0 \n 40923211 \xa0 \n 40923212 \xa0 \n 40923213 \xa0 \n 40923214 \xa0 \n 40923216 \xa0 \n 40923217 \xa0 \n 40923218 \xa0 \n 40923219 \xa0 \n 40923220 \xa0 \n 40923221 \xa0 \n 40923223 \xa0 \n 40923224 \xa0 \n 40923225 \xa0 \n 40923226 \xa0 \n 40923227 \xa0 \n 40923228 \xa0 \n 40923229 \xa0 \n 40923230 \xa0 \n 40923231 \xa0 \n 40923232 \xa0 \n 40923233 \xa0 \n 40923234 \xa0 \n 40923235 \xa0 \n 40923236 \xa0 \n 40923237 \xa0 \n 40923238 \xa0 \n 40923239 \xa0 \n 40923240 \xa0 \n 40923241 \xa0 \n 40923242 \xa0 \n 40923243 \xa0 \n 40923244 \xa0 \n 40923245 \xa0 \n 40923246 \xa0 \n 40923247 \xa0 \n 40923248 \xa0 \n 40923249 \xa0 \n 40923250 \xa0 \n 40923251 \xa0 \n 40923252 \xa0 \n 40923253 \xa0 \n 40971220 \xa0 \n 40971227 \xa0 \n', 'tags': '', 'url': 'Task1.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'W11 inspection', 'text': 'Parts download(SW) :\xa0\xa0 link \n \n Design and draw link structure :\xa0 \n \n Assembly link :\xa0 \n \n SW transfer to CoppeliaSim :\xa0 \n \n Simplified couple :\xa0 \n \n', 'tags': '', 'url': 'W11 inspection.html'}, {'title': 'HW1', 'text': 'HW1 accounts for 25% of semester grades \n HW1 must be completed before 22:00 on November 10, 2021. \n The HW1 specific project results return area  will open on  September 23  ,  2021, and close  at  22:00  on November 10,  2021. \n Assignment 1: meArm Robot parts drawing and electromechanical motion simulation scene production \n Step1  : Download  meARM.7z,  which contains the meArm Robot scene and laser cutting parts assembly manual that has not yet been assembled. \n meArm_75-0040_v1.pdf  is another assembly reference manual. \n Step2  : From the  Compile CoppeliaSim page  in the course webpage  , download the  official version of coppeliaSim 4.1.0 and the compiled version of MSYS2. 7z  (file size 412 MB, uncompressed 1GB) portable package. \n Step3  : In HW1, each student is required to distribute random numbers through the program (the actual random number distribution results of the two classes are subject to the results obtained by clicking the button below during the above class). The two sets of parametric CAD packages used are carried out from the beginning of the software development. introduction, through access to education version software package file, download and install, and configure use. Step1 according to the size of the parts, the parts one by one to complete meArm Robot draw with group legislature. and parts  imported  after CoppeliaSim assembled configuration to  UI interface  in The slider controls the rotation of each axis of the meArm Robot. \n 2b CAD package distribution result:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n Appendix: \n 1. CAD kit allocation table: \n sw：Solidworks，inv：Inventor，nx：NX12，ons：Onshape，slvs：Solvespace \n 2a Package random number allocation result \n 2b Package random number allocation result \n 2. After the two sets of CAD complete the part drawing and transfer it to CoppeliaSim, in order to establish the Dynamic Model,  shape edit modes  must be  converted to a  clean model  , and combined with the actual transferred STL format part shape to create a simulation scene (scenes). \n 3. For  the construction of  meARM Robot  dynamic simulation scene  , please refer to  0  ,  1  ,  2  ,  3  ,  4  ,  5  ,  6  ,  7  , and also refer to  Uarm Robot model  and related  videos  . \n 4. CoppeliaSim design dynamic simulations  description page  . \n 5.  Internet Lua  program execution. \n 6.  meArm.slvs  ,  meArm_in_solvespace.slvs \n 7. UI interface program reference: \n function closeEventHandler(h)  \n    sim.addLog(sim.verbosity_scriptinfos,\'Window\'..  \n    h  ..\' is closing...\')  simUI.hide(h)  \nend  \n \nfunction joint1_rotate(ui,id,newVal)  \n    simUI.setLabelText(ui ,3000,\'theta1 is set to\'..newVal)  \n    sim.setJointTargetPosition(joint1, newVal*deg)  \nend  \n \nfunction joint2_rotate(ui,id,newVal)  \n    simUI.setLabelText(ui,3000,\'theta2 is set to\'..newVal)  \n    sim .setJointTargetPosition(joint2, newVal*deg)  \nend  \n \nfunction joint3_rotate(ui,id,newVal)  \n    simUI.setLabelText(ui,3000,\'theta3 is set to\'..newVal)  \n    sim.setJointTargetPosition(joint3, newVal*deg)  \nend  \n \nfunction joint16_rotate( ui,id,newVal) \n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)  \n    sim.setJointTargetPosition(joint16, newVal*deg)  \n    sim.setJointTargetPosition(joint20, -newVal*deg)  \nend  \n \nfunction sysCall_init()  \n    -- 在這裡做一些初始化 \n    joint1 = sim.getObjectHandle(\'motor1\')  \n    joint2 = sim.getObjectHandle(\'motor2\')  \n    joint3 = sim.getObjectHandle(\'motor3\')  \n    joint16 = sim.getObjectHandle(\'motor16\')  \n    joint20 = sim.getObjectHandle(\'motor20\')  \n    i = 0 \n    度 = math.pi/180  \n    print(i)  \n    xml = [[  \n<ui closeable="true" on-close="closeEventHandler" resizable="true"> \n    " <label text="This is a demo of the CustomUI plugin. Browse the tabs below to explore all the widgets that can be created with the plugin. wordwrap="true" />  \n    <tabs>  \n        <tab title="Numeric">a  \n            <label text="Slider can be oriented horizontally or vertically, and has optional attributes (in XML) that can be set, such as minimum and maximum Value value."  wordwrap="true" />  \n            <label text="" id="3000" wordwrap="true" />  \n            <label text="theta1" /> <hslider tick-position="above" tick-interval ="1"  \n            minimum="0" maximum="360" on-change="joint1_rotate" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />  \n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1"  \n            minimum="-90 " maximum="185" on-change="joint3_rotate" />  \n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1"  \n            minimum="0" maximum="15" on-change="joint16_rotate" />  \n        </tab>  \n    </tabs>  \n</ui>  \n]]  \n    ui=simUI.create(xml)  \n     \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOOT-calculation model and experimental results.pdf  ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'Solidworks drawing', 'text': "origin: \n In 1993, the founder  Jon Hirschtick  recruited a team of engineers with the intention of making 3D CAD software easier to use.  Hirschtick started his new business by raising $1 million from members of the acclaimed MIT Blackjack team.  The team's goal is to build an  easy-to-use and affordable software  based on the  Windows platform  .  This was really revolutionary at the time, when all other popular CAD systems were built on  Unix  .  After several years of development, the initial release of SolidWorks is finally here... \n introduce: \n The original version was released in 1995, and its features are as follows. \n 1. Compared with the US$18,000 of other CAD systems, the price of SolidWorks is only US$4,000. \n 2. The software is easier to use: Compared with other CAD software on the market, users only need 3 months of experience to get started. \n \xa0 A large part of the ease of use is that it uses the modern and well-known Windows interface. \n 3. The visualization of the model is unprecedented.  The construction function in a well-lit shaded environment is in sharp contrast with the traditional modeling space. \n \xa0 The traditional modeling space only displays the wire frame under the black background.  The similar FeatureManager that we are now familiar with is used to display the construction history of the model. \n 4. Parts, components and drawings are available from the beginning.  The user cannot apply mates in the component, but the component can still be placed in place. \n \n", 'tags': '', 'url': 'Solidworks drawing.html'}, {'title': 'Solidworks2021 installation configuration', 'text': 'How to download Solidworks? \n Teaching: https://youtu.be/0cbrksHL9s8 \n \n \n \n', 'tags': '', 'url': 'Solidworks2021 installation configuration.html'}, {'title': 'Solidworks operation process', 'text': 'How to use Solidworks? \n Teaching: https://youtu.be/gtpOX4krs4E \n \n', 'tags': '', 'url': 'Solidworks operation process.html'}, {'title': 'Solvespace drawing', 'text': "origin: \n A brief comment and interview with developers was published on Libre Graphics World in 2013.  And this review praised SolveSpace's  small executable file, advanced constraint solver and range of output formats  .  The same comment pointed out some shortcomings, mainly its  slow and limited handling of Boolean values and lack of native Linux support  .  However, local Linux support has since been added. \n introduce: \n -  modeling of 3D parts - tensile, and Boolean rotation (and / Differential) operation to draw \n -  Modeling 2D part - the part drawn as a single part, and exported as DXF, PDF, or the SVG; Assembly verification using complex 3D \n \xa0Prepare CAM data-export 2D vector art for waterjet or laser cutting machine; or generate STEP or STL for importing into third parties \n \xa0CAM software  -  mechanism design-use constraint solver to simulate plane or space links, including pins, balls or sliding joints  -  plane and solid geometry-replace manually solved trigonometric functions and spreadsheets with real-time dimension drawings \n \n", 'tags': '', 'url': 'Solvespace drawing.html'}, {'title': 'Solvespace installation and configuration', 'text': 'How to download Solvespace? \n Teaching :  https://youtu.be/WA30mcUVi6w \n Solving space: \n To  https://solvespace.com  downloading from  https://github.com/solvespace/solvespace  download the source code to the portable programming system used to compile \n', 'tags': '', 'url': 'Solvespace installation and configuration.html'}, {'title': 'Solvspace operation process', 'text': 'How to use Solvespace? \n Teaching: https://youtu.be/ksTnyrjiz_c \n \n', 'tags': '', 'url': 'Solvspace operation process.html'}, {'title': 'Sports scene', 'text': "Kamoto 1: \n CAD1 parts are exported and transferred to CoppeliaSim operation video (Youtube) \n CAD1 parts transferred to CoppeliaSim instructional video (Wink) \n CAD1 transfer to Coppeliasim instructional video embedded video: The title must be ``  NFU-MDE-cad2021-student ID-SW2020  parts are transferred to CoppeliaSim instructional video'' with  voice instructions  and  subtitles. \n Kamoto 2: \n CAD2 parts are exported and transferred to CoppeliaSim operation video (Youtube) \n CAD2 parts transferred to CoppeliaSim instructional video (Wink) \n CAD2 transfer to Coppeliasim instructional video embedded video: The title must be ``  NFU-MDE-cad2021-student ID-SW2020  parts transfer to CoppeliaSim instructional video'' with  voice description  and  subtitles. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n", 'tags': '', 'url': 'Sports scene.html'}, {'title': '進度', 'text': '\n \n', 'tags': '', 'url': '進度.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務 \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_製造微型機器人的增材製造工藝 - 計算模型和實驗結果.pdf \n 具有逆向運動學 PD-偽逆雅可比行列式和正向運動學的機器人機械手控制 Denavit Hartenber.pdf \n 機器人手臂運動學分析.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': '最終項目', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project specific project results return area  will be opened on  December 09  ,  2021, and closed  at  2022.01.05 22:00 \n Design and production of flexible manufacturing system scene \n Please  select a scene or model  from  https://github.com/mdecourse/scenes  and  https://github.com/mdecourse/models  , and match the  content of cad2021_textbook.pdf  (download after logging in to the @gm account), make your own choice Combined with the assembly product, it is combined into a Flexible Manufacturing System system scenario. \n Description of flexible manufacturing system \n example: \n \n', 'tags': '', 'url': '最終項目.html'}]};