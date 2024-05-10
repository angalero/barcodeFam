
// This was a test input code ** ignore **
var codeOne = "687HYFD5";


// These are the barcodes that were made
const newCodes = ["RMJ6746X", "YCI4410W", "COV0047777", "YEW9919M", "IXL6029C", "COV0049555", "BFN4478I",
"UND5936O", "YKJ9413A", "CER4549B", "DKS2229F", "NZV5231C", "VSJ3740Y", "HGZ3226G", "YXK9041D",
"FVK5573B", "YEE1615M", "ODX6032K", "NBP4034X", "OER9888M", "IHX3246W", "GMD3525Q", "UBN3256E",
"PIW5717G", "CDI9089E", "HVW7485B", "TFN7847J", "NKD2919B", "GHL5363N", "JVP7252L", "RBT8762I",
"RFN1811B", "ZHQ1097L", "GLW9579W", "CYG4992Q", "DGM3082W", "HJE9055C", "TPH2155D", "VZA5396E",
"GKA4767J", "ZUD8676X", "KLC3870U", "VGC5465I", "JFM8771B", "QEV7035O", "KON6328U", "ERZ1729V",
"CEO9799C", "QTL9542D", "AQP4683H", "CNF5638C", "FCK8011L", "NCP3157U", "ZNH8636W", "AEY9271D",
"IQE8039K", "TTC3061D", "OTD6621P", "VJM3896Z", "NGC5156N", "OBB7897K", "BJI7894C", "JAA4955O",
"VNP2966L", "JOP4524S", "XSQ3687Q", "VVN2216T", "KLX7786E", "EDU3597A", "QQL6244O", "OBG4299O",
"PKJ8894F", "NGS8841O", "RKF6674A", "DIL6964Y", "QNP1928B", "AQO9490F", "KPY4376Y", "CUU3459T",
"YXF6951Q", "XDW8570B", "VVG5858N", "PBK4895J", "NSW6232A", "MCI2098G", "CHH3612P", "AIJ5050G",
"TNY8497H", "RIM5051D", "PLR8887F", "NSJ8451N", "VZG2593Q", "ONP4992E", "NUF1754F", "VOW6310L",
"GTX1598B", "SUQ5150F", "EZX1784O", "OCD8377C", "CSC7190U", "MSC9047Y", "JKV3347W", "RNY6585K", 
"BQG3343G", "HAQ8236H", "UVZ7110D", "SMR2937C", "EKX7744B", "WOB6514W", "ACW9949V", "ODK4446O", 
"JSB6546G", "RGD2261V", "AFE5554P", "VVI9746S", "SVU1994U", "OIY5086O", "NNU3921Z", "GCG3951F",
"CYK1610W", "UJW8386U", "NMC2455T", "ZYW1473W", "ZEA2845O", "ZWG6732Q", "ERR7965O", "VJZ4431Y",  
"NDW1041P", "WGZ2132S", "DWN9616M", "DUK2564N", "QQJ4450R", "HHF7256Q", "IKR7272B", "PBK6190D",
"PTO7075A", "UNK7081R", "VNE5153T", "SGQ9181P", "INR9591K", "GME2469Y", "THF7311D", "KSF5094Z", 
"DVL5152B", "IOX2796G", "LGS5454B", "JPJ9725U", "EIV1445M", "SQR1494U", "NON8362J", "SVK7256Q",
"HPL1850Q", "JFH8345Y", "JUM1896J", "HOP2695B", "PDH9753P", "JKP1650W", "DDQ5613O", "ZBA5749P", 
"FEH4182S", "LGJ9161N", "PLH8013Z", "PGD4910U", "MNY1039Z", "VCE8169P", "LCD9399R", "RJZ5550H",  
"ATL7885J", "PYG5676C", "QKG7255M",  "ZUE7690K", "XXZ2711E", "GBG8330U","LQJ2971K",  "MNB8783W", 
"CEO5177R", "YML7922S", "AVG7456G",  "EDV7188Y", "ATX8079U",  "VIT9094R", "BWR1484V",  "XHZ6695V",
"DUD5699U",  "AHT7069W","UWS6874N",  "MPD1546E", "JRI5923J",  "EDU2798Y", "BAC2214S",  "FJT4853X", 
"LOU2033Z",  "VNF4290V", "GPA2362D",  "PLX4199H", "XBU3879O",  "XNX1844Y", "UIP5488S",  "AMR9280X", 
"WMS9484D",  "LLA2271G", "CKU5281Y",  "LER6357N", "QKV3127W",  "GBV3162Y", "FCZ6869H",  "QLC6744E", 
"FON4844I",  "FBD6738D", "TJV4458E", "ZER9732Y", "GBZ6555Y", "ZHO7944W", "ANC8674X", "JUH6016E", 
"LSC8448F", "YCP3162J", "UDU2052T", "UUU7998O", "RSX9672C", "ADW6972Z", "IKT1062U", "CHF9651M", 
"SRO3097W", "WMK2858K", "NJG3337A", "XEG3297F", "VVL6710L", "EWY7150C", "HFV7213V", "VQX9934T", 
"ZPE4241V", "DQO7186K", "CFY6413F", "ALD2622P", "TGC6460O", "IIN7893M", "NMO9643N", "GEQ3774Y", 
"LZL7010I", "AOM1077J", "UVZ1184H", "LMU3032E", "DLH7634K", "MQA6077G", "TAL8080C", "VBW3360K",
"MRB2674O", "QFZ1736O", "CEF6637R", "ZRA5643N", "PXA7195E", "HBE7213G", "UMB4134J", "IXB7851K", 
"OFC8560D", "DVS9929K", "TSV1076V", "YQX8710A", "OKX6645V", "VNY6050O", "MRY5040J", "LVM2515I", 
"MBR9252B", "AXI2921F", "YKC7290S", "PFU8526F",
"ITH8398B", "SLF4899N", "CPX3920D", "NTV8570K", "MUW7751T", "UJY3494R", "TNK7013L", "JRC9116F", 
"ECJ6449I", "DWI8655O", "EKA1846P", "QNN4075Q", "SYJ4723W", "SKA4262V", "WPB3978C",  "MUF6032Y", 
"QVZ9619N", "BXF3666K", "LBU4355L", "AWX5920G", "NNV8182O", "BNH3496F", "PCX6935J", "KAI8792P", 
"FZE6869G", "JWC9334Y", "PZJ1975S", "SMK2738P", "PWX5575I", "YZZ2365F", "JXD5584Q", "RXC6682L", 
"FTU3115Q", "MVM9948B", "LEP5957O",  "SLR6589M", "DSD9049O",  "NQH6624M", "XES2986L",  "PCG2750Y", 
"FHP2498Y",  "WDD9057D", "AUC5980J",  "PXG3165P", "HSF7121Q",  "GJS3886W", "POW6395D",  "XSA7132O", 
"NBF7595P",  "FKQ6552U", "IMN4487Z",  "GJW9573G", "HRC4321A",  "MQV7814A", "OUY6811G",  "GNA4719W", 
"ZMD7913L",  "MXI1452E", "DLC8512S",  "ZZL7447S", "YRX3917A",  "XHM1373K", "OAJ6183Z",  "DXI9773L", 
"LJB9772B",  "XGK5531Y", "TGW6044X",  "DQK4510L", "JZL7159Z",  "BHH4522Z", "TLZ2484Y",  "BUR5795D", 
"WJN7174L",  "XWY8288S", "CNJ2590B",  "OUU7077Q", "GPB6288I",  "QLS1780Y", "QGD3921T",  "PJI7467L", 
"TDT8566O",  "CYV1875D", "BLV5682Q",  "MUF6162E", "XAE2486T",  "TCR2997M", "BWV7845E",  "YRN9037M", 
"OZI2570B",  "ZWR2945F", "TKA5462Q", "OUS6183W", "PWR3482K",  "IHY1294I", "WGL5734G",  "RGL2919T", 
"AEU1336G",  "TAE1093G", "ARZ5852W",  "IOI8824K",  "QHM7235R", "CUW5751U",  "BAB3187H", "VOV5966V",  
"DNS1742C", "JWZ9020F",  "ATL8133C", "UIS5218W", "IMZ3035V", "EWU8099S",  "GTP1037X", "OWY5574D",  
"GQC6411D", "XXE5924R",  "EYF8854S", "NLY3197A", "TGK4790L", "MFD9118A",  "AZY6587P", "HNV6021E",  
"UUO1315F", "OSL1534X", "AHL4559S", "STU7512Z", "DQK3932C",  "SYZ9035S", "WOA6392N",  "EDC8647P", 
"ZJU5142G",  "LCA5128G", "RUJ3124D", "SPH2927W", "GYQ6720B",  "QLR1330F", "BXR3413A",  "HHG5631O", 
"BIW5674H",  "ZOA3052N", "HNQ3483S", "RWM2719N", "CAD8629J",  "XYR9921G", "FXX7716F",  "XKA3656J", 
"AJJ9436R",  "FUT2238E", "RBD5155Q",  "IFD6362T", "YGL8190Y",  "QSL1177T", "BXR2126T",  "JJD1027P", 
"MUM5392O",  "MMW4226N", "QOF8822E",  "WWV7448T", "ZVJ1216J",  "WBL8411X", "NOO5747J",  "GHX8133L", 
"SQN5014Q",  "THA8765V", "BDG7532J",  "LEH5588R", "DTI3312D",  "FMG9753B", "UYB5260G",  "FJS8564D", 
"VFX4872Q",  "TPF8939Y", "LAD9357U",  "PEP3012Q", "CJA2046S",  "HZO8047X", "EEC8687O",  "LMU1467J", 
"SUF5360K",  "POY4816X", "VWT7294Z",  "LDI8251M", "DAI2427H",  "YOO4268N", "WCA2649O",  "MDS4252B", 
"LHF8363X",  "EGC3720W", "UFA9950Y",  "RXX5812R", "UHO5772Y",  "PPN4385R", "WMR7619U",  "ISC9334I", 
"EXR9842P",  "QZH8388O", "LNA6725V",  "YAF5771N", "IUR1097G",  "URC3585K", "BBS6290G",  "YGJ4256L", 
"MQN9045B",  "QEZ8270K", "RWG2629J",  "IQC4864N", "CII3865P",  "BSQ3324V", "CJD2552O",  "NCP4654P", 
"MXO8151V",  "XFC3167Y", "DNE5855A",  "FCE5350J", "JAJ4424B",  "PBG1018Q", "RKH8433W",  "XLP9725B", 
"DMH9293W",  "HGO3287Z", "AKP1323K",  "BTZ9850D", "SDR4045K",  "IYZ5249H", "VEI6676G",  "JZF3390W", 
"BML3576N",  "RLX8585Z", "CED3771L",  "JHK5189R", "EIT4151G",  "YML6931I", "DRJ3973V",  "BRZ4193N", 
"XVX1953R",  "TBM3336Q", "XHL8637I",  "JAW7092O", "QNV6374Q",  "UMB8429J", "FNC5269W",  "SSK1529Y", 
"BAT1071H",  "BCI7718U", "ZXN7012V",  "BKQ6948U", "NGO6082I",  "PWK5145M", "XML6579X",  "BKO1012F", 
"USQ8793B",  "DXY2897Q", "SGP2467M",  "YIM9746H", "QIK3379V",  "ATF3844Q", "WZS7791K",  "JCN7176G", 
"LHK7258W",  "ZHW1989R", "VMC6548W",  "OLV4387S", "THX8148M",  "XPY9336O", "WUC1279O", "WWA1873P",
"ENF5821U", "FQU6137L","NBG3481Q", "HSW4490M","TEW5043M", "KZU7053D","AFV8087S", "CDC9054H",
"OUP4211G", "HNV8531B","DNR6357F", "LDT1579N","AQN6772N", "VSL4649G","EUA5476S", "ODO1746C",
"YQH1797R", "GHL8190S","JJK4718P", "EQV4058K","RED9514W", "JDK2650G","MRC5479I", "DQG2269W",
"VOF5563V", "SHD2310O","RKT7926U", "NPC2245X","WOW7046B", "QCH2492R","VCK4434T", "DNZ8318S",
"EMS5311P", "DZH5839H","DEH5089E", "EQG5926E","BJY5565N", "XJV6784T","VXJ6259H", "HHS8828B",
"OBB1997X", "WFG6967P","DEY7060L", "PXT9062T","UZU3849Z", "SAG5255O","WVC3965S", "OGW1923T",
"XVO8652W", "OOJ8562V","YEH9661B", "GWD4666H","HFG2360T", "ROC5022L","JLW3034K", "TRY7539H",
"GAW8363W", "KNM7743G","FVG4410H", "CWL2377V","ZYT9646Y", "PCL7781A","QEQ2469F", "SRD1492F",
"LPH9864I", "GWS3821W","JIZ1322A", "FYV7299Z","STW9460G", "AGI6146W","UAI2873W", "GQI5669T",
"KGQ4267M", "FWY5138G","FLF3814K", "XYX8036F","WEI1794I", "LJD1077X","XGD4219V", "YCH3764H",
"BKM9457W", "LTI2035V","IAE6154P", "ADE3076P","DEF3672H", "JKE7636R","YZD6970Y", "RSX1649P",
"VTR2099E", "ZSP6156B","CEF6876B", "FZK6384H","VBR8085D", "RGL1552H","NQN2725S", "XGT1828H",
"DBF6461E", "XAV8996L","YLD3314H", "OFM8278J","QNH9854D", "YVW2489F","IAT8229R", "QGK6551Z",
"BFK8517B", "SBL1395J",
"OXG4918F", "VCG8178S",
"DIS2879K", "EAD3893F",
"ETN7533M", "YZE6229W",
"NIG7590W", "AEC5060E",
"OVT4154L", "RUI2347R",
"TOA7642C", "KKK3083P",
"GPE5357B", "BXW8735I",
"GRQ8583T", "JQY2127G",
"OKC8785O", "FPS5182F",
"UBY7295S", "RAF6777Z",
"TRU2785P", "MSH2433S",
"UZE2178O", "WNB9281U",
"OCB6689L", "ALF9518W",
"OZR9064A", "MGD9352A",
"UHE4595M", "IDW4135S",
"DZB8566O", "CFH9560K",
"VLT8439S", "BJB9677W",
"PFI4084Y", "IDL2084S",
"UYC9041N", "XME7091O",
"OKF2864K", "IQU2425U",
"WWS2531Q", "VBY4914E",
"FFS8674R", "KOA8297Z",
"GPB7257I", "SES3877F",
"TIZ5318S", "SJX4352H",
"BQT4168G", "RBQ1343E",
"ENA4638J", "XZR9366M",
"SXS5052E", "IOV6895P",
"OMJ7862W", "ZLH1715C",
"HET8491P", "HPK2688T",
"QCO7873X", "KXN8784M",
"DBV1513I", "BPK5892N",
"XOD2938L", "GCA8414L",
"ZEB2855U", "CYV2164F",
"FKN8398G", "MDE6661A",
"MFT7845I", "SLC3572I",
"NQV9781G", "RIN7137K",
"SPM7946P", "GPB7423Z",
"TYT8774D", "FSC6147P",
"GRS6336S", "MRU7266C",
"DOJ9334J", "XUC6674D",
"WXN1326Q", "LNA6656V",
"FBS7693N", "YGU8475S",
"FOU3210R", "RXT7841T",
"TVP1296M", "WDR5896Y",
"LRB1923K", "RBO5684B",
"CDO6861M", "FYF1981U",
"VWG2056J", "PVR7792F",
"ZEQ5560B", "RBD9281G",
"RBG5370N", "OCE2672G",
"KZP4451T", "VUE2374M",
"CUR2488T", "SQT1959H",
"EPN9851E", "UGF4390G",
"IXI5630P", "CZP2426N",
"KVW6721Q", "PYR3656R",
"LNI7148Z", "WEK5958K",
"YVZ4644Q", "NCZ4982X",
"VPA2379D", "RQI9731Z",
"LSP3860U", "AWO4216M",
"ZJL2113F", "ECB4410I",
"JIB4491R", "TXK5026U",
"PNZ1539K", "XJJ8390D",
"TYK2471J", "QAS1958O",
"EVD2145N", "XGB4869K",
"FAR4124V", "NNM8537H",
"QOU1035N", "OEB6589Y",
"YAW4970S", "MJG2681U",
"LUM2677W", "SJY5073N",
"VOW7172C", "WUJ5697D",
"GQP1260D", "NKR3299L",
"RSF4120W", "OPR2581Y",
"RFS9395O", "JYG8437P",
"HVB6156W", "NOR9040U",
"OEC3854F", "FCF6932J",
"SZT8852X", "ELU8092B",
"QZN7759M", "KPO5069Z",
"UUT5927W", "UZX6169E",
"XVI6324C", "ICL6555H",
"IVZ9230U", "YBW2613J",
"MXA8676Z", "FAI3741I",
"IDF9630V", "UGW7832K",
"RDH5030U", "ZLA2862Q",
"SBX9047X", "UYS6617Z",
"ZNZ6284B", "HNU2115D",
"TRR8546Q", "FJN9961M",
"EDA5132F", "SSM6921Z",
"DPY8710H", "QKG1390D",
"YUJ5283Y", "AMI6033D",
"MVO2419P", "SYK1161N",
"YMQ8133N", "MFV3861I",
"GII3364Y", "ORO5941N",
"DYM4271E", "OXV6394T",
"PTM1174Z", "JSI5954U",
"DQO6831Y", "EZG9937R",
"FMQ7836K", "YFH9793E",
"MDB8027X", "OBY3080U",
"YVO6956M", "TOM2024M",
"VDY3017S", "AUH6824N",
"BFJ4961G", "PUA9612D",
"KWV9974E", "UAG7729Z",
"RRW7816P", "ZER5251Q",
"IJR9165E", "YUZ7123D",
"YKI6086B", "IIY2255J",
"POA7252N", "PJD4898V",
"GAP3951U", "PLM9456J",
"VDD4490N", "MHQ3514U",
"NQM1144X", "XDS9936Y",
"FQU6126U", "GFT3485J",
"LCD5561S", "FPM3067R",
"OJF9974S", "UKV7530F",
"WFZ3132W", "RNW2797X",
"DRN3298F", "SVK1249G",
"FPW8027E", "LXG5325U",
"HKQ4788O", "QAF7529B",
"ENL5964H", "EMH1918S",
"PSZ9087B", "HOK3357W",
"VDP9787P", "ZGT7756A",
"ZPP2860Y", "DGI3085V",
"WQR1062V", "HGU9086O",
"CQE6021Y", "RQW5631C",
"YWN2939R", "HMA8166Q",
"FDP9398F", "ENV6448J",
"BIH2161L", "WTZ4140F",
"LPQ9489O", "RBI6013J",
"ZCS4939A", "AZZ2564S",
"LMX4210N", "HDH4373E",
"GQJ3058V", "TFJ8249U",
"VTW7978Z", "XXP5425W",
"RKT4072B", "QQJ2884E",
"DKB5766W", "XEI4834L",
"TYN8698X", "WNJ6278S",
"BVG2576E", "WBN5684W",
"QXE7990K", "YMO8324S",
"DET2749B", "RIP6967G",
"OVF7263H", "MRJ2981D",
"QDN8443Z", "BHR9230U",
"IUP1822U", "VRV5693A",
"KYO6270W", "FOD5964A",
"LHM2014H", "EEV8561N",
"ZHD8495V", "TKX5344C",
"QAV8086A", "TKA4613Y",
"NOV2784C", "CNU9151M",
"QCK3013K", "LNU5634S",
"GMD7815B", "LTJ2789C",
"JZB3622G", "ACK1152Q",
"IYC1265U", "DPV4184U",
"IGV2024F", "NWA1179G",
"YHM9656T", "WIO5591X",
"XYF4217X", "LMT4991Z",
"HQC5391U", "LKP1964L",
"GWR5092V", "FLS8017X",
"CXC2367G", "AAN5733E",
"MOD9589T", "ASK2447C",
"GWA3381M", "ARR6834F",
"LBA1210R", "DOE9785I",
"UDB4727F", "ZUC7930R",
"YOU4373Y", "ITF1070W",
"ZKW5063W", "AXS4022B",
"NUY9144Q", "ZTS2159Z",
"HIT5865U", "FFL8684Y",
"RZJ3866N", "YGN9962V",
"VPU8240L", "NCH8232Y",
"ZXP3367M", "DGS2977Y",
"CQE6989Y", "WAF3661S",
"XCZ6236Z", "GKH8043D",
"XCV7257F", "DTB1731R",
"MZP4256X", "STW5363L",
"PHS9646Q", "ASL2070O",
"RRJ1487J", "KOD5360M",
"ZYJ3673D", "KEU7246F",
"GFH4493O", "YBF9816I",
"DGC2492A", "KVA5879T",
"HYQ1956R", "KCV7288I",
"MGN4893T", "GMB8317W",
"FGB8631J", "LKL9540J",
"IRJ9074A", "ECA7582U",
"TAY8333F", "OCT5853G",
"SYP4583R", "WJN6271I",
"YWH2358V", "EAY7879U",
"WGE5643O", "BII5121T",
"SDD4714T", "QDR7478Y",
"ZXO6043H", "FSF3278A",
"TBK9746Y", "DLS5927O",
"JQL7422C", "VWZ7012W",
"VYG1885M", "JFW3247M",
"SCR2264W", "EQM5054F",
"WNZ5545Z", "LLP9391Q",
"UQK2510K", "PCO5968V",
"OQK7440B", "IAA6527V",
"KTV1795I", "JDH2364O",
"JIM5138Z", "JUQ1265Z",
"MJW2532C", "ZVI1119F",
"UFW1562B", "OWW6874Q",
"KCL4917R", "VYW8882O",
"CVT9318D", "JHE9985E",
"GGR3321W", "HBY6149R",
"UCI8984L", "LMU1389O",
"LMR1688R", "SPY3823Y",
"YTA5719N", "UEV9113H",
"BSC9359M", "JFK4635V",
"IAV3412N", "EOK2550Z",
"RRI4817S", "DHJ8492J",
"AHB2396I", "HUP6677C",
"SUC3014Y", "MDQ5598Y",
"LZG9922N", "LBO7920E",
"ATE4927Y", "OWY6938X",
"MVE7870Q", "HEF7599W",
"JWL1575E", "ZVI9215N",
"HJQ4110B", "ISR1882Q",
"WLX4770I", "INL7871Z",
"SDY4025P", "HVK4858V",
"HOH7660M", "COW9471R",
"OUL5882O", "BJM2951O",
"FLR6661B", "SQX6948B",
"MXZ5958C", "QKC4153D",
"EUW1919V", "LFD8532Y",
"LMS1976T", "SLI7113B",
"LWY8733T", "SMZ6878L",
"NOQ9986T", "OWT6512Q",
"AWD4855V", "VXE2984E",
"ONK5484Q", "GIZ1526L",
"FJV4292K", "PND8117X",
"JKI1513Y", "KZF5162T",
"IKL7292D", "FBQ2880R",
"NWP6189S", "ECE6642Z",
"EZD4572E", "VOZ2087N",
"TCB7752A", "NUG2992F",
"NPO7897K", "EBY7783A",
"QHP6410I", "FOA9114E",
"QQM2264M", "BWV4831X",
"KLV1721T", "CIM3727D",
"NCK7065B", "QTS9877W",
"LEN9644H", "DIE2045D",
"YCE4892I", "MDR6345F",
"LSV9274J", "JSC6986G",
"DGN6021V", "JBA1365Z",
"ZXQ9528B", "SLP7796M",
"SPG2235J", "CWO8258M",
"MUS2387N", "MJO9495P",
"MVL1062Y", "QNR8246V",
"JHI9552D", "NUO2443F",
"IQP2717C", "CVM2914O",
"UZL9517M", "DRS9480B",
"LVA7359F", "PCW9346S",
"ERY1570G", "TXD9658M",
"PEG8330X", "XJO8245M",
"NTJ1163I", "JZF6042M",
"ZYU8560F", "HAZ1853V",
"EYI4327P", "RLS3369N",
"IJH7244K", "GZT5291N",
"HLM7422Q", "BCD4220I",
"CXJ3247L", "WDQ4770G",
"CIH8191Q", "YCY2237L",
"KST8824L", "VDH8338F",
"ONM8417O", "NQI1214K",
"XPL2579Y", "EQX2216Y",
"DIV5572N", "NPJ9820K",
"GZG1324G", "HZM2695Z",
"RAK7817P", "CIC1541A",
"RSA5276L", "WSN2660U",
"OKZ7773Y", "LJR6165P",
"RSO8675P", "NEP6685H",
"RWT1715D", "NTX8217I",
"XFY4098W", "HMS7573Q",
"MKP6392P", "HML6239T",
"EWF7948F", "BHK5478A",
"YDS8746C", "SZN1392B",
"TNV7091C", "FHZ8810W",
"IOE2227X", "WKS1890O",
"DVF2956T", "ZEY8790N",
"XER1877C", "SZM3395V",
"URN9933J", "ATP1739R",
"JCB1023C", "SFV8683Z",
"COS3889J", "DVH4227E",
"YLF3527R", "IPS5538Y",
"XKA1781C", "DCB7853Z",
"XUW6510Q", "GJW7926W",
"ONQ1259V", "LIV2278Q",
"KQR2476U", "NQK2257F",
"UNU4775N", "XCE6239W",
"LCQ9987Q", "UBH2121W",
"GVV4367P", "JNR3567C",
"IVT8476W", "AFT8977I",
"FAB5044V", "ZOO7095V",
"PCU2413N", "YZE9861I",
"ATH8959X", "ETQ7760M",
"ERG3590L", "KYE8041H",
"ZAH7956C", "FGO9750Q",
"XUO3576J", "XTI8433X",
"EVN2130V", "FQF3970X",
"RBV9696L", "VGS3245A",
"OQF5262K", "PDR4181F",
"IKO2131N", "EFC2659C",
"KMT5287R", "YGZ7168A",
"SNE8926M", "KIC1936E",
"WOB8150C", "GYE5668M",
"ZWG9165T", "OAR4175D",
"GSH6033L", "GIC2897B",
"KEJ8037K", "JSM4492I",
"YXN2053Q", "SOH3776J",
"ZDD1051W", "PHC3492C",
"WTE2262X", "QGN7428W",
"ZES5995Q", "SLQ1434X",
"NMV6076D", "KBE8566W",
"UFE2245T", "GLL1324K",
"TMU5852R", "MNN4112G",
"XTO3647R", "ZEZ4438P",
"BID1437R", "CUW5825D",
"IGM1988T", "EDP9046J",
"WBU9848S", "YYT8625A",
"FCY9689J", "QQH3774B",
"FZM1769K", "KXV1192G",
"KTO3476D", "DKQ4191Q",
"ZBB2311O", "BNN1873D",
"HIN3794J", "PWC7267H",
"SDQ6984L", "BCP3644R",
"VNM5712W", "WIC7896K",
"MGR6547C", "TCE4625N",
"ZTQ3516I", "BJX3677O",
"SPN5963S", "DME4734N",
"HRN2253A", "XFY8133X",
"REU1476O", "KKJ8981B",
"WAJ1557X", "VSR2088G",
"KSR2179A", "LPO7847A",
"VKH6358C", "DQW8810K",
"YEW9083U", "USA2710U",
"CZM5023T", "JGE2658O",
"ASN1348Y", "NTQ1111E",
"KID4829A", "IKW8767V",
"XWX5677X", "QRV5185M",
"FPM6637B", "DJI9123L",
"ZRU4558F", "SXB3875G",
"CEE9963Q", "JJW8321G",
"KKZ5069D", "OHV4150V",
"TXK9252V", "VYK7069K",
"OPO7033S", "QDH1331L",
"WDP2163J", "HER8035Z",
"RDX1093N", "IDB7245I",
"OAM6393I", "EHK3467V",
"IIC4971M", "WWC8669F",
"YXK5054I", "IJM7667H",
"UGK7680D", "OPO8072T",
"LPF4231Y", "JQO9836U",
"VHM7710B", "DOL6697L",
"SSL1249N", "SOV6959T",
"NLQ9966D", "QTZ1637S",
"YIX2077S", "MOA9121A",
"VOL4976E", "FGC4982I",
"JXI7816Q", "KDO8850L",
"ZTP3598S", "MAT6252E",
"ZCN9591X", "AFR1672H",
"QBY4973W", "FUB7063L",
"WNH3320Z", "DQN4613L",
"PVP9999F", "EPJ7149C",
"YYB6973L", "WAS3219F", "WTW3322W", "PII3472V", "CKH6342Q", "XHP7187K", "LEG2016I", "OCO2822P",  
"ASW2019Z", "IJB2525E", "QWV2735P", "SQI9895I", "XBU3921R", "VDO6870G", "NDM7928V", "GAB1757A", 
"MWL2091C", "BGW6122I", "QBO3022U", "CUX1994G", "NFK7397D", "UGM4357H", "NGY5877T", "DDP2732W", 
"EMI9433X", "IMH5339O", "LKP2869C", "GIM1688S", "HMM4739G", "DGD2531B", "TJE2544Z", "NHH6644V", 
"WUE6661J", "DJV2865G", "FLE5482Q", "OSV9327R", "YAT8529S", "TLA4764Z", "JDF3690H", "WTI5328D", 
"KXG1760X", "TQH1842N", "CVG7585A", "TOD7024P", "YAP4450W", "YCC4890Y", "UUY9341T", "TJD5739O", 
"VVE3075R", "BSA9845G", "YFX8719W", "SEH5479U", "TMJ2198G", "HYZ8141U", "JKM8874W", "JNE8238I", 
"XMO8839R", "XLL9277P", "AAF4253G", "NBN9754E", "UCY8450O",
"ADV3273T",
"MLG1880D",
"QIB4842B",
"QDN1988P",
"RXT5229Y",
"AHU7462Z",
"MZU2755T",
"ZUU5130T",
"QHL8431F",
"LLD9264A",
"LNQ8323H",
"JZO9176J",
"PFX1383I",
"IBH4922Z",
"GSF2292V",
"TXA8662E",
"RYZ8574G",
"IOA8470L",
"EOX2541B",
"LWB7035R",
"SPM3867W",
"OZC1035O",
"BEN4995G",
"OLQ2229D",
"YHN5157F",
"WCS6928Q",
"QJL4654B",
"DWS9724Z",
"BSY3382A",
"WQE9647F",
"HKX1720Q",
"ANG9925E",
"TTW6685W",
"IZY3843A",
"WSB9729K",
"YRZ1218I",
"WRV9956U",
"MDQ3276E",
"JVP2385S",
"GMC2757Z",
"ACR9288L",
"JGI2269E",
"NMH5074X",
"FWK2810E",
"JVZ3988K",
"ZJX5859T",
"KYZ4836Z",
"BCR6184J",
"TEG1677E",
"KNZ8924D",
"AVX1374I",
"XWB8642C",
"ZBI1259C",
"FMC5811L",
"CPC1311Z",
"GQE3580C",
"NRE9536N",
"POE8663L",
"YXI6989Y",
"EXE1919H",
"QYF8646N",
"BJK5099D",
"ZOE9775H",
"ZUJ9759L",
"DXR7513Z",
"QFM6421U",
"EUK8511I",
"YGH7036K",
"LCC2876W",
"GMC8172S",
"VOB8227W",
"HQY6017T",
"DDO1794V",
"QBJ8532O",
"ZSC3686M",
"OAD9025G",
"PJI5055J",
"NYA7561N",
"HQQ8218J",
"VVI9570W",
"EHT5283V",
"RGJ9698P",
"AJL9948I",
"NMX4292W",
"NGL1785B",
"MGF5136A",
"RER3297S",
"PXQ6456E",
"FSS4830S",
"DAL6021J",
"YHI3059S",
"NOO1272V",
"SXH7852H",
"WER7186H",
"TIH5181N",
"UJY3130U",
"VXB1312O",
"GTQ1439H",
"IWM4513A",
"LJP4849G",
"BOV3798Y",
"EOW4726U",
"GIT4676T",
"POT9185K",
"WTP3484S",
"ZTM2640A",
"YVV2555E",
"QEK1250A",
"JHK4290H",
"UFU4774Z",
"IAF9048C",
"FNH1722J",
"LQU3267C",
"KOR8581C",
"UAX4430E",
"SEV9112N",
"JFQ8530V",
"DSC5595O",
"XEG8917U",
"QUQ7428Y",
"PGT5341Y",
"WMO5464T",
"NRC2367I",
"FKG6856K",
"RNU3731H",
"SLQ3955Y",
"CJQ8194D",
"WIE2882F",
"XHP7551G",
"VVD9338A",
"JBT1547J",
"IQS3291G",
"LNA5054T",
"KIO8115Y",
"MQI8877I",
"GVL2968J",
"GJY1021M",
"HFR5125J",
"QBI5961J",
"LYF9732A",
"ZNM1713W",
"FNE9019O",
"SRS4084J",
"QBL9269P",
"QWQ1914R",
"KRT5886T",
"LCG5224C",
"DXP2347J",
"KKN1529Q",
"FGC3750H",
"TKI5060F",
"ATA1842U",
"SHK7965Q",
"ESE6698N",
"QCG4782B",
"HMH5749B",
"FUX1991U",
"GWF9988J",
"GES9676M",
"TSM1373O",
"NFV1749J",
"QGH7613U",
"ACX3451E",
"LGQ1333M",
"WMN2092U",
"NJT2858Q",
"OKO5742I",
"LXA5644B",
"YZU2135A",
"DMU8344T",
"VVO1625U",
"GKQ8432E",
"HEI6297E",
"DTL2341C",
"ERV2181W",
"SXK9116X",
"MKQ4126H",
"WUU7894O",
"WUK5741F",
"URD3251I",
"TPM9252I",
"EBO7527U",
"AEN5554I",
"FOZ1063M",
"IEN5241G",
"AMD1678G",
"OXN8442S",
"EIX3565A",
"ELB8445Y",
"TFL5218N",
"LYZ5684P",
"DQQ3093O",
"FCT1598K",
"CBF5089I",
"SMN1731Q",
"PGM1122K",
"RCQ2547R",
"UKO6656N",
"EAA4331C",
"JXP9567W",
"TQA7643Y",
"KHV9453W",
"YIU5542W",
"LWZ4928G",
"GSQ5769O",
"RZJ9158O",
"UCY1121P",
"CHW4090S",
"XMA6788K",
"YKQ3131P",
"UZW8963J",
"HSC2441D",
"SDM3837J",
"HAD9394J",
"XBP7826E",
"YJA8943B",
"HYY3028D",
"TCR4539E",
"QDG2037J",
"LYO8854S",
"BZH8169N",
"SUT8418N",
"UUG6699C",
"LBC7666R",
"YHN7745H",
"GBH5594Z",
"OGM1448I",
"PSY1535K",
"RIF8261K",
"PMW1451R",
"HAN1060A",
"CUC3532Y",
"RMJ8212X",
"KCX6111N",
"YRT5610Q",
"ISE3652L",
"HIB3199K",
"BQZ3315Z",
"YXX2384F",
"SME9019S",
"GZG6981F",
"EGJ8369N",
"XIH8723J",
"XUC8598J",
"VCV5875Z",
"YAD5012U",
"FAP3076D",
"IAF2579P",
"ZOE1892O",
"CGA7830A",
"XRO4652Z",
"RXC9758G",
"POA6537T",
"ZSS6952R",
"KQQ8839R",
"ZHC2160I",
"YYY2961U",
"EYE7668Q",
"FZA5550N",
"OFE7393J",
"FKT9355A",
"NNY5882M",
"ZMT3057Y",
"UAY4486D",
"KMI5440Q",
"IZT5970R",
"FIN9617O",
"CBK5428F",
"SMZ7944U",
"NNO8699K",
"HGK3420K",
"TKW8944B",
"KTC1443T",
"QAQ3613A",
"QVD6697T",
"JAE6788P",
"ANL3257Q",
"UHY5810X",
"IJG8139N",
"KFM9174C",
"DEU2630D",
"BRD8869T",
"QXP8190Y",
"BIL2739W",
"ZOU6261H",
"CZJ9691W",
"ROL9876C",
"AUH5996N",
"GAM4355I",
"MOI4021X",
"XKP5187D",
"PFO1588B",
"LBQ4693O",
"SUY8590L",
"WXB6557Y",
"SIR5834Q",
"XXG1328I",
"FAQ6331O",
"MXT3577H",
"UIG9082J",
"AIE9025H",
"EIL8979E",
"UTX4094Y",
"YVN5969Z",
"BGH2253Y",
"YAP9522G",
"RWJ3325S",
"TRK8298U",
"PVF2342G",
"CDK4691F",
"FEE5178E",
"ORA7211C",
"QIT5215W",
"QDX9586H",
"JPL8273N",
"FQE4556L",
"TOM6055J",
"VOV7382Y",
"GYE1096L",
"WSW6054R",
"RCS9465X",
"NRP3862W",
"DHV6023E",
"GPZ6178H",
"DWG3611D",
"BIT6532N",
"MAT4324V",
"YYW8993K",
"LQT8166T",
"XVN8721O",
"ZQZ6175H",
"NGX3851A",
"HTN4930O",
"FWU4817J",
"MEX6956T",
"UUX7067B",
"KQB5793P",
"OGF6828Z",
"MAG4236S",
"EFE6033I",
"RGV6146A",
"HPL6473R",
"LYI1913G",
"NDV9723U",
"JOD6011V",
"EZJ9171S",
"VOT4187O",
"TWX5222J",
"PLC4490H",
"QZM6096Z",
"RDH7872B",
"UNR7148T",
"FEE4930Y",
"LJN9898L",
"MZH2214V",
"XBW9420N",
"TYK3458T",
"VVY8915R",
"NNG3113S",
"IXJ2245P",
"YOA4990O",
"CRE7114V",
"ERL4969V",
"HGA7665M",
"DPF6215T",
"ZCQ9632A",
"NCA8749R",
"RCK9941E",
"VUA2732G",
"VVE1268I",
"XLC8061L",
"IKK1473J",
"EYC3113W",
"UEI4797J",
"FSU3325T",
"WQK6180Y",
"LLO2222P",
"RDL2756K",
"OIS5175A",
"ICH7418E",
"FEA1996V",
"FKT2450L",
"GET8690P",
"NJC1363S",
"ATK1962U",
"QDJ5095W",
"QIF8540C",
"KQF3612E",
"AGD1092P",
"ZWM9377T",
"WDK3517C",
"IAN1061B",
"GQD4487X",
"EUU7736N",
"QUK7290Y",
"CYU1853M",
"SME8430N",
"DID8553X",
"WAD8269O",
"JOU1447N",
"RVG4815J",
"LPJ7539T",
"IHD2762B",
"PKF8325A",
"ZLC4280A",
"MUM1581R",
"XDZ5091M",
"TUQ6197P",
"IEE4547C",
"DBZ8486T",
"JLE9976K",
"QVS1131D",
"COW7970Z",
"EVO3511X",
"DVE5278K",
"WWN6747T",
"VKL1690K",
"WUC7830P",
"IOK4736K",
"YEK8923F",
"XQL5159D",
"OLS6062G",
"ZJV8666H",
"ZPD6631A",
"VFM4954Q",
"HAU9469T",
"JZA6073C",
"FAW7789E",
"LSS8757V",
"OFP1323M",
"IFF9358T",
"GQS7745E",
"ULX9624I",
"MGA4911Y",
"JZX7774Q",
"YNJ6910B",
"WEM2568E",
"QDX9292J",
"LYI7729U",
"LMD7677I",
"ADN3417B",
"ACZ5875A",
"VWD5899Z",
"HMQ5745C",
"DOI6992V",
"AYQ5751O",
"QHX9695G",
"DPL7360N",
"AEZ6960Y",
"KFX9396Z",
"CVC9050D",
"LRW5569Q",
"TCF4261Y",
"YPL4718S",
"LZT3529Z",
"EAA3186U",
"DUO5683B",
"UUX8154P",
"IOA6513Y",
"QRJ3579N",
"EOU5978M",
"LUJ1670R",
"FDY4440Y",
"BDN6497B",
"PLY4040V",
"IPL5344H",
"IJU2147F",
"LJD2545C",
"JDD3034R",
"JGM2020O",
"HDR6516M",
"NMZ9645F",
"ZRQ6625E",
"QIC2658Z",
"SHD1532D",
"TYP6748Q",
"FDO3681W",
"FWJ4398J",
"PCC8594S",
"YZF3388W",
"JPQ6958E",
"RBL8024S",
"ZUV4346X",
"PPK5839M",
"MOO8796I",
"MQB7977V",
"GVL4584B",
"WJP1685A",
"JOT5496B",
"JGA3413C",
"USA4463N",
"BOP6022B",
"PFT6637I",
"PDR4323X",
"XOB9186E",
"PRM1324J",
"HKU2792T",
"WYD3122Y",
"QHU7865L",
"GME7728O",
"RRA3793A",
"DXY4669K",
"VLE2590K",
"QWX7292S",
"WCH9287Y",
"UDC4233C",
"MXK3463C",
"PAO5342Q",
"FPU4728E",
"LDA3842Y",
"DRB8381F",
"UEO9510X",
"VSQ5283C",
"NHH8420J",
"CXS3148Q",
"AFB1440V",
"DTE2534K",
"OCV1372P",
"DJU8889N",
"AKR9543X",
"YCC8885K",
"BMX4883M",
"PUY1576U",
"QKP6184P",
"STO6470W",
"RRD2790C",
"EZS3781Z",
"SUW8133Z",
"NNJ5427C",
"SQK6399H",
"UWI8177C",
"ELH6441R",
"UWT6348V",
"OXX7521F",
"WXP9834Z",
"SEF6243S",
"KJV2392V",
"TXO8395E",
"QIV2223U",
"ZGI2932P",
"OUN8646U",
"ORD7411C",
"TFD2171R",
"FMI8342O",
"QUF2962Z",
"HHG6983F",
"GTK9735D",
"VCP9960N",
"XQG9940L",
"KUB4281T",
"WAM7989T",
"UAL4226X",
"HQE2497Y",
"DXC3040W",
"ONB1626Z",
"AKL1197C",
"GAV7715B",
"WIZ4286S",
"MGM6174K",
"WPV9280I",
"TRS3399N",
"GDE8020X",
"EGM5921L",
"NWD9441V",
"EWE8812B",
"PYM8912N",
"VNM7556Z",
"VBC3550W",
"UCO4569K",
"SPM5952X",
"BSD2815N",
"YDT2692N",
"JRU1035P",
"TMQ3136G",
"DJJ6615V",
"ZMV7274K",
"HAU9138P",
"TDW9637X",
"PVT2899C",
"UOA1599Y",
"RJT6039C",
"MEX7916A",
"XXY2257D",
"RUI4280F",
"KKS3878W",
"WOO8865V", 
"BTL1372B", 
"NYR8691A", 
"XON4843K", 
"AUL9187Y", 
"KKH9779F", 
"QRD2316J", 
"GRS9343R", 
"HXI5246Z", 
"NJB8071Z", 
"RRW6564D", 
"TAM2027O", 
"JOH2526B", 
"CVQ6581Z", 
"WZH3721X", 
"NJC3188W", 
"WMD4613I", 
"VSJ3729X", 
"HTB6816U", 
"MUV9078K"
];




// empty array to move all scanned codes from newCodes 
// to usedCodes
const usedCodes =[];


var verCode = "";





// verify and change background colour
function getURL() {

    // gets barcode from input
    var barcode = document.getElementById("barcode").value;


    // loop to see if code exists in newCodes
    if (newCodes.includes(barcode)) {
            
    // turns background colour to green
    document.getElementById("colour").innerHTML = "<link rel=stylesheet href=colours\\green.css>";

    // gets the position of the found code and removes it
    // from newCode array, into usedCode array
    let position = newCodes.indexOf(barcode);
    newCodes.splice(position, 1);
    usedCodes.push(barcode);
    
    }   

    // if code exists but is in usedCodes array
    else if(usedCodes.includes(barcode)) {

    // change background colour to yellow    
    document.getElementById("colour").innerHTML = "<link rel=stylesheet href=colours\\yellow.css>";

    }

    // if code does not exist
    else {

    // change background colour to red    
    document.getElementById("colour").innerHTML = "<link rel=stylesheet href=colours\\red.css>";

    }

    // Sets a timer to change back to blank (white default page) colour
    setTimeout(colourChange, 3000) 

}




// function changes colour back to default white page and
// input line to empty
function colourChange() {

    document.getElementById("colour").innerHTML = "";
    document.getElementById("barcode").value = "";


}
