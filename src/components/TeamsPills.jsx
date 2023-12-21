import { useState } from "react";
import UserCard from "./UserCard";
import 
{
  close,
  menu,
  ecell_logo,
  conor,
  DhirajSahu,
  SarthakKakad,
  PrajwalNaik,
  AaryaShankarMhetre,
  AaryaKulkarni,
  AditiHiray,
  AmanSingh,
  VaradPhadtare,
  MainakSaha,
  ChetanChaudhari,
  GranthBorhade,
  HarshShyamGupta,
  KashishBorele,
  MohdAfrazKhan,
  NiteshRameshDhande,
  PreetHule,
  QuaziMdMoinuddin,
  RutujaPatil,
  SankethShetty,
  SashaGhadigaonkar,
  ShankhinBhamre,
  SuchitMarutiNangare,
  SwapnilNaik,
  ShreyaMate,
  TapaswiniDesiti,
  TripatRajkumar,
  YashKadu,
  AbhijeetSureshDandge,
  AditiChaudhari,
  AditiShanbhag,
  AkashDange,
  AmberDey,
  AnikaRameshNimje,
  AnimeshAjayKarmakar,
  AnkitaLaxmanMane,
  AnushkaGholap,
  AryaDharkar,
  AryanSandipGaikar,
  AyushChavan,
  GauriPhanse,
  HarshalChaudhari,
  JayNarendraRajput,
  JayveersinhJadeja,
  KavitaChaudhari,
  MadhuraDoijode,
  ManavAttamJondhale,
  ManswiNivruttinathKadu,
  MohitManishBhoir,
  MonojitSamanta,
  OjasKamble,
  OmAhire,
  OmkarBabasahebShinde,
  OmkarManojChate,
  ParthRajanSawant,
  PavjiMaheshkumarPatil,
  PayalSantoshAndhale,
  PranjalUbale,
  RachnaVishalMishra,
  RiyaPrasannaDevadiga,
  SakshiAvadhutVankudre,
  SakshiShankarGadhave,
  SamikshaSushantYesade,
  SakshiKhade,
  SamruddhiBhor,
  SamruddhiKirave,
  SanchitDongre,
  SanikaSandipZagade,
  SapnaNarendresinghRathore,
  SatvikSurshe,
  ShambhaviBhosale,
  ShifaMohammedKurshid,
  ShivamPrakashSuryawanshi,
  ShravniKulkarni,
  ShrawaniMahajan,
  ShyamChopade,
  SiddhantSachinSawale,
  SiddhiDeshmukh,
  SiddhiSandipPatil,
  SnehaKale,
  SubodhKumarSahu,
  TanishkaGaikwad,
  UtkarshaNitinPattebahadur,
  VaidehiBhute,
  VardhiniSubramanium,
      VedantPatil,
      VidhiKumari,
      VivekBilla,
  NidhiZanjal, PiyushKadu, ShriyaMishra, TanishkaUgale , ChetanChaudhariV 
} from "../assets";
import NonCoreUserCard from "./NonCoreUserCard";

const positionsold = [
  {
    pos: "Secretary",
    candidates: [
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: "",
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
    ],
  },
  {
    pos: "Mentor",
    candidates: [
      {
        name: "Mainak Saha",
        position: "Ecell Mentor",
        hovercolor: "#84cc16",
        img: "https://i.imgur.com/4UNUKMfb.jpg",
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
    ],
  },
  {
    pos: "Technical",
    candidates: [
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: "",
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
    ],
    // noncores: [

    // ],
  },
  {
    pos: "WebMaster",
    candidates: [
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
    ],
    noncores: [
      
      {
        "ID": 10,
        "Email": "akash.dange0307@gmail.com",
        "name": "Akash Tukaram Dange",
        "position": "Webmaster",
        "DeptID": 13,
        "Position": "NonCore",
        "Year": "TE",
        "Branch": "Comps",
        "RollNo": "B62",
        "instagram": "none",
        "linkedin": "https:\/\/www.linkedin.com\/in\/akash-dange-98a699243\/",
        "github": "https:\/\/github.com\/AkashTU3S2223005",
        "img": "https:\/\/drive.google.com\/open?id=1bRyMsjizo8HF31_CpuzdSrLTXsymoAnX"
       },
       {
        "ID": 15,
        "Email": "kavita.nbc.9876@gmail.com",
        "name": "Kavita Chaudhari",
        "position": "Webmaster",
        "DeptID": 13,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "IT",
        "RollNo": "A24",
        "instagram": "https:\/\/instagram.com\/kavita.nb.c?igshid=NGVhN2U2NjQ0Yg==",
        "linkedin": "www.linkedin.com\/in\/kavita-chaudhari-37264326b",
        "github": "https:\/\/github.com\/anami29",
        "img": "https:\/\/drive.google.com\/open?id=18kgjxbKHtZUQ6o480skJ9mI8q34ox_bW"
       },
       {
        "ID": 17,
        "Email": "jayrajput512199@gmail.com",
        "name": "Jay Narendra Rajput",
        "position": "Webmaster",
        "DeptID": 13,
        "Position": "NonCore",
        "Year": "TE",
        "Branch": "Comps",
        "RollNo": "B77 ",
        "instagram": "https:\/\/www.instagram.com\/ig_jay_rajput_\/",
        "linkedin": "www.linkedin.com\/in\/jayrajput09",
        "github": "https:\/\/github.com\/jayrajput5121",
        "img": "https:\/\/drive.google.com\/open?id=1Tvt-NokMwBJvFodpq3r_GOw43edPTISg"
       },
       {
        "ID": 54,
        "Email": "subodhsahu2223@ternaengg.ac.in",
        "name": "Subodh Kumar Sahu",
        "position": "Webmaster",
        "DeptID": 13,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C23",
        "instagram": "https:\/\/instagram.com\/sks_sahu_19?igshid=YTQwZjQ0NmI0OA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/subodhkumarsahu98\/",
        "github": "https:\/\/github.com\/SubodhKumarSahu2826",
        "img": "https:\/\/drive.google.com\/open?id=1r_n_PwLtFvamq4_B8l9WrmPLmGthzcn-"
       },
       {
        "ID": 81,
        "Email": "adharkar1@gmail.com",
        "name": "Arya Dharkar ",
        "position": "Webmaster",
        "DeptID": 13,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C15",
        "instagram": "NA",
        "linkedin": "NA",
        "github": "https:\/\/github.com\/AryaDharkar",
        "img": "https:\/\/drive.google.com\/open?id=1yYpikmwvrLRxKXq_D__o5ELoGqGY-rxS"
       },
    ],
  },
  {
    pos: "Management",
    candidates: [
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
    ],
    noncores: [

    ],
  },
  {
    pos: "Content & Creative",
    candidates: [
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
    ],
  },
  {
    pos: "Social Media",
    candidates: [
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
    ],
  },
  {
    pos: "Outreach",
    candidates: [
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
    ],
  },
  {
    pos: "Activity",
    candidates: [
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
      {
        name: "Conor",
        position: "ECELL Lead",
        hovercolor: "#84cc16",
        img: `${conor}`,
        github: "https://github.com/thenotoriusmma",
        linkedin: "https://www.linkedin.com/in/thenotoriusmma",
        instagram: "https://instagram.com/thenotoriusmma",
      },
    ],
  },
];

const positions=[
  {
    pos: "Secretary",
    candidates: [
      {
        "ID": 1,
        "Email": "None",
        "name": "Prajwal Naik",
        "position": "Secretery",
        "DeptID": 1,
        "Position": "Core",
        "Year": "TE",
        "Branch": "Comps",
        "RollNo": "B02",
        "instagram": "https:\/\/www.instagram.com\/prajwall_xd",
        "linkedin": "https:\/\/www.linkedin.com\/in\/prajwal-naik-819b92268\/",
        "img": `${PrajwalNaik}`
       },
    ],
    noncores :[]
    
  },
  {
    pos: "Mentor",
    candidates: [
      {
        ID: 2,
        Email: "None",
        name: "Mainak Saha",
        position: "Mentor",
        DeptID: 0,
        Position: "Core",
        Year: "BE",
        Branch: "NA",
        RollNo: "NA",
        instagram: "https://www.instagram.com/mainak.saha_?igshid=OGQ5ZDc2ODk2ZA==",
        linkedin: "https://www.linkedin.com/in/mainaksaha08/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/MAINAKSAHA07",
        img: `${MainakSaha}`,
      },
      {
        ID: 2,
        Email: "None",
        name: "Sakshi Khade",
        position: "Mentor",
        DeptID: 0,
        Position: "Core",
        Year: "BE",
        Branch: "Comps",
        RollNo: "NA",
        instagram: "https://www.instagram.com/sakkkshi.16?igshid=OGQ5ZDc2ODk2ZA==",
        linkedin: "https://www.linkedin.com/in/sakshikhade16?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "NA",
        img: `${SakshiKhade}`,
      }
    ],
    noncores :[]
  },

  {
    pos: "WebMaster",
    candidates: [
      {
        "ID": 84,
        "Email": "sahudhiraj2122@ternaengg.ac.in",
        "name": "Dhiraj K Sahu",
        "position": "Webmaster Head",
        "DeptID": 13,
        "Position": "Core",
        "Year": "TE",
        "Branch": "Comps",
        "RollNo": "B18",
        "instagram": "https:\/\/www.instagram.com\/dhiraj_sahu456\/",
        "linkedin": "https:\/\/www.linkedin.com\/in\/dhiraj-sahu-420628258\/",
        "github": "https:\/\/github.com\/DhirajSahu18",
        "img": `${DhirajSahu}`
       },
      
       {
        "ID": 4,
        "Email": "quaziquazi2223@ternaengg.ac.in",
        "name": "Quazi Md Moinuddin",
        "position": "Webmaster Head",
        "DeptID": 13,
        "Position": "Core",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C58",
        "instagram": "https:\/\/www.instagram.com\/moinuddin_k_13\/",
        "linkedin": "https:\/\/www.linkedin.com\/in\/md-moinuddin-quazi-7a5942244\/",
        "github": "https:\/\/github.com\/kmoin1309",
        "img": `${QuaziMdMoinuddin}`
       },

    ],
    noncores: [

      {
        "ID": 10,
        "Email": "akash.dange0307@gmail.com",
        "name": "Akash Tukaram Dange",
        "position": "Webmaster",
        "DeptID": 13,
        "Position": "NonCore",
        "Year": "TE",
        "Branch": "Comps",
        "RollNo": "B62",
        "instagram": "none",
        "linkedin": "https:\/\/www.linkedin.com\/in\/akash-dange-98a699243\/",
        "github": "https:\/\/github.com\/AkashTU3S2223005",
        "img": `${AkashDange}`
       },
       {
        "ID": 15,
        "Email": "kavita.nbc.9876@gmail.com",
        "name": "Kavita Chaudhari",
        "position": "Webmaster",
        "DeptID": 13,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "IT",
        "RollNo": "A24",
        "instagram": "https:\/\/instagram.com\/kavita.nb.c?igshid=NGVhN2U2NjQ0Yg==",
        "linkedin": "www.linkedin.com\/in\/kavita-chaudhari-37264326b",
        "github": "https:\/\/github.com\/anami29",
        "img": `${KavitaChaudhari}`
       },
       {
        "ID": 17,
        "Email": "jayrajput512199@gmail.com",
        "name": "Jay Narendra Rajput",
        "position": "Webmaster",
        "DeptID": 13,
        "Position": "NonCore",
        "Year": "TE",
        "Branch": "Comps",
        "RollNo": "B77 ",
        "instagram": "https:\/\/www.instagram.com\/ig_jay_rajput_\/",
        "linkedin": "www.linkedin.com\/in\/jayrajput09",
        "github": "https:\/\/github.com\/jayrajput5121",
        "img": `${JayNarendraRajput}`
       },
       {
        "ID": 54,
        "Email": "subodhsahu2223@ternaengg.ac.in",
        "name": "Subodh Kumar Sahu",
        "position": "Webmaster",
        "DeptID": 13,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C23",
        "instagram": "https:\/\/instagram.com\/sks_sahu_19?igshid=YTQwZjQ0NmI0OA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/subodhkumarsahu98\/",
        "github": "https:\/\/github.com\/SubodhKumarSahu2826",
        "img": `${SubodhKumarSahu}`
       },
       {
        "ID": 81,
        "Email": "adharkar1@gmail.com",
        "name": "Arya Dharkar ",
        "position": "Webmaster",
        "DeptID": 13,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C15",
        "instagram": "NA",
        "linkedin": "NA",
        "github": "https:\/\/github.com\/AryaDharkar",
        "img": `${AryaDharkar}`
       },


    ],
  },

  {
    pos: "Content & Creative",
    candidates: [
      // {
      //   "ID": 53,
      //   "Email": "nangaresuchit13@gmail.com",
      //   "name": "Suchit Maruti Nangare",
      //   "position": "Content&Creative Head",
      //   "DeptID": 2,
      //   "Position": "Core",
      //   "Year": "TE",
      //   "Branch": "Comps",
      //   "RollNo": "A02",
      //   "instagram": "https:\/\/www.instagram.com\/suchit_nangare\/",
      //   "linkedin": "https:\/\/www.linkedin.com\/in\/suchit-nangare-4ab7a924b",
      //   "img": `${SuchitMarutiNangare}`
      //  },

       {
        "ID": 9,
        "Email": "116amansingh@gmail.com",
        "name": "Aman Singh ",
        "position": "Content&Creative Head",
        "DeptID": 2,
        "Position": "Core",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "B08 ",
        "instagram": "https:\/\/instagram.com\/aman5ingh1?igshid=OGQ5ZDc2ODk2ZA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/aman-singh-580205295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img": `${AmanSingh}`
       },
    ],
    noncores: [
      {
        "ID": 7,
        "Email": "sambhor05@gmail.com",
        "name": "Samruddhi Sudam Bhor ",
        "position": "Content&Creative",
        "DeptID": 2,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C22",
        "instagram": "NULL",
        "linkedin": "NULL",
        "github": "NULL",
        "img":`${SamruddhiBhor}`
       },
      
       {
        "ID": 14,
        "Email": "cminati326@gmail.com",
        "name": "Aryan Sandip Gaikar ",
        "position": "Content&Creative",
        "DeptID": 2,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Civil",
        "RollNo": "H08",
        "instagram": "https:\/\/instagram.com\/arix_2.005?igshid=OGQ5ZDc2ODk2ZA==",
        "img": `${AryanSandipGaikar}`
       },
       {
        "ID": 16,
        "Email": "madhura.doijode1428@gmail.com",
        "name": "Madhura Doijode",
        "position": "Content&Creative",
        "DeptID": 2,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "C53",
        "instagram": "https:\/\/instagram.com\/madhuraaaa28?igshid=OGQ5ZDc2ODk2ZA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/madhura-doijode-67250628a",
        "img":`${MadhuraDoijode}`
       },
       
       {
        "ID": 60,
        "Email": "vivekbilla822@gmail.com",
        "name": "Vivek Billa",
        "position": "Content&Creative",
        "DeptID": 2,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "B051",
        "instagram": "https:\/\/instagram.com\/_vivek_billa?igshid=NzZlODBkYWE4Ng==",
        "img": `${VivekBilla}`
       },
    ],
  },
  {
    pos: "Social Media",
    candidates: [
      {
        "ID": 73,
        "Email": "nkswapnilnaik@gmail.com",
        "name": "Swapnil Naik",
        "position": "SocialMedia Head",
        "DeptID": 10,
        "Position": "Core",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "A045,Computer ",
        "instagram": "https:\/\/instagram.com\/swapniln_23?utm_source=qr",
        "linkedin": "https:\/\/www.linkedin.com\/in\/swapnil-naik-b66848291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "img":`${SwapnilNaik}`
       },
    ],
    noncores: [
      {
        "ID": 6,
        "Email": "aditishanbhag2004@gmail.com",
        "name": "Aditi Anant Shanbhag",
        "position": "SocialMedia",
        "DeptID": 10,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "A61",
        "instagram": "aditishanbhag0408",
        "linkedin": "NULL",
        "github": "NULL",
        "img": `${AditiShanbhag}`
       },
       {
        "ID": 8,
        "Email": "pranjalubale12@gmail.com",
        "name": "PRANJAL  PRAMOD UBALE ",
        "position": "SocialMedia",
        "DeptID": 10,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Civil",
        "RollNo": "H026",
        "instagram": "https:\/\/instagram.com\/pranjal_ubale?igshid=NGVhN2U2NjQ0Yg==",
        "img": `${PranjalUbale}`
       },
       {
        "ID": 11,
        "Email": "vedantpatil05052004@gmail.com",
        "name": "Vedant Patil ",
        "position": "SocialMedia",
        "DeptID": 10,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "C41",
        "instagram": "https:\/\/instagram.com\/way.dont?igshid=YTQwZjQ0NmI0OA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/vedant-patil-a6385120b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img": `${VedantPatil}`
       },
       {
        "ID": 12,
        "Email": "snehaa.kale07@gmail.com",
        "name": "Sneha kale ",
        "position": "SocialMedia",
        "DeptID": 10,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "C68",
        "instagram": "https:\/\/instagram.com\/snehaa21_?igshid=MzMyNGUyNmU2YQ==",
        "img": `${SnehaKale}`
       },
       {
        "ID": 13,
        "Email": "tuna170505@gmail.com",
        "name": "Tanishka Dinesh Gaikwad ",
        "position": "SocialMedia",
        "DeptID": 10,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "A36",
        "instagram": "https:\/\/instagram.com\/tanishka.ig?igshid=NzZlODBkYWE4Ng==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/tanishka-gaikwad-12b3b32a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img": `${TanishkaGaikwad}`
       },
       {
        "ID": 22,
        "Email": "chavanayush2005@gmail.com",
        "name": "Ayush ",
        "position": "SocialMedia",
        "DeptID": 10,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Mech",
        "RollNo": "K013",
        "instagram": "https:\/\/instagram.com\/axyushhhhhh?igshid=YzAwZjE1ZTI0Zg==",
        "linkedin": "NULL",
        "github": "NULL",
        "img": `${AyushChavan}`
       },
       {
        "ID": 25,
        "Email": "siddhantssawale01@gmail.com",
        "name": "Siddhant Sachin Sawale ",
        "position": "SocialMedia",
        "DeptID": 10,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "A15",
        "instagram": "https:\/\/www.instagram.com\/sidd_sawale?utm_source=qr",
        "img": `${SiddhantSachinSawale}`
       },
       {
        "ID": 33,
        "Email": "omkarchate1111@gmail.com",
        "name": "OMKAR MANOJ CHATE ",
        "position": "SocialMedia",
        "DeptID": 10,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "C02",
        "instagram": "https:\/\/instagram.com\/omkar___chate?igshid=OGQ5ZDc2ODk2ZA==",
        "img": `${OmkarManojChate}`
       },
       {
        "ID": 63,
        "Email": "theharshalchaudhari@gmail.com",
        "name": "Harshal Chaudhari ",
        "position": "SocialMedia",
        "DeptID": 10,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "C30",
        "instagram": "https:\/\/instagram.com\/theharshalchaudhari?igshid=NzZlODBkYWE4Ng==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/the-harshal-chaudhari-86797b261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "github": "https:\/\/github.com\/THEHARSHALCHAUDHARI",
        "img": `${HarshalChaudhari}`
       }
    ]
  },
  {
    pos: "Internal Management",
    candidates: [
      {
        ID: 100,
        Email: "shreyamate31@gmail.com",
        name: "Varad Phadtare",
        position: "Internal Management Head",
        DeptID: 7,
        Position: "Core",
        instagram: "https://www.instagram.com/psycteen/",
        linkedin:
          "https://in.linkedin.com/in/varad-phadtare-b30257296",
        img: `${VaradPhadtare}`,
      },
      {
        ID: 91,
        Email: "shreyamate31@gmail.com",
        name: "Shreya mate",
        position: "Internal Management Head",
        DeptID: 7,
        Position: "Core",
        Year: "SE",
        Branch: "Comps",
        RollNo: "B47 ",
        instagram: "NULL",
        linkedin:
          "NULL",
        img: `${ShreyaMate}`,
      },
    ],
    noncores: [
      {
        "ID": 43,
        "Email": "kirvesamruddhi@gmail.com",
        "name": "Samruddhi Sachin Kirave ",
        "position": "InternalManagement",
        "DeptID": 7,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "B14 ",
        "instagram": "https:\/\/www.instagram.com\/samruddhikirave?utm_source=qr",
        "img": `${SamruddhiKirave}`
       },
       {
        "ID": 44,
        "Email": "pavijpatil0709@gmail.com",
        "name": "Pavij Maheshkumar Patil",
        "position": "InternalManagement",
        "DeptID": 7,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "IT",
        "RollNo": "D34",
        "instagram": "https:\/\/www.instagram.com\/reel\/C0ZSA7epFI1\/?igshid=MzRlODBiNWFlZA==",
        "img": `${PavjiMaheshkumarPatil}`
       },
       {
        "ID": 45,
        "Email": "mohitbhoir20@gmail.com",
        "name": "Mohit Manish Bhoir",
        "position": "InternalManagement",
        "DeptID": 7,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Elex",
        "RollNo": "J20",
        "instagram": "https:\/\/instagram.com\/mxhit__7?igshid=NzZlODBkYWE4Ng==",
        "img": `${MohitManishBhoir}`
       },
       {
        "ID": 46,
        "Email": "shambhavi.bhosale20@gmail.com",
        "name": "Shambhavi Bhosale ",
        "position": "InternalManagement",
        "DeptID": 7,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C49",
        "instagram": "https:\/\/instagram.com\/shambhaviii__20?igshid=OGQ5ZDc2ODk2ZA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/shambhavi-bhosale-47b527295",
        "github": "https:\/\/github.com\/shambhavi0420",
        "img":`${ShambhaviBhosale}`
       },
       {
        "ID": 75,
        "Email": "shrawanimahajan2122@ternaengg.ac.in",
        "name": "Shrawani Mahajan ",
        "position": "InternalManagement",
        "DeptID": 7,
        "Position": "NonCore",
        "Year": "TE",
        "Branch": "Comps",
        "RollNo": "C60",
        "instagram": "https:\/\/instagram.com\/shrawani.mahajan?igshid=MTNiYzNiMzkwZA==",
        "img":`${ShrawaniMahajan}`
       },
    ],
  },
 
  {
    pos: "Volunteer",
    candidates: [
      {
        "ID": 57,
        "Email": "aditihiray2223@ternaengg.ac.in",
        "name": "Aditi Hiray",
        "position": "Volunteer Head",
        "DeptID": 12,
        "Position": "Core",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C58",
        "instagram": "https:\/\/instagram.com\/aditteaaaa?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
        "linkedin": "https:\/\/www.linkedin.com\/in\/aditi-hiray-782703296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "github": "No",
        "img": `${AditiHiray}`
       },
       {
        "ID": 58,
        "Email": "niteshdhande11@gmail.com",
        "name": "Nitesh Ramesh Dhande",
        "position": "Volunteer Head",
        "DeptID": 12,
        "Position": "Core",
        "Year": "TE",
        "Branch": "AIDS",
        "RollNo": "A01",
        "instagram": "https:\/\/instagram.com\/_nitesh_0011?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
        "linkedin": "https:\/\/www.linkedin.com\/in\/nitesh-dhande-854674296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "img": `${NiteshRameshDhande}`
       },
       {
        ID: 89,
        Email: "chetanchaudhari1206@gmail.com",
        name: "Chetan Chaudhari",
        position: "Volunteer Head",
        DeptID: 12,
        Position: "Core",
        Year: "SE",
        Branch: "Comps",
        RollNo: "A01",
        instagram:
          "https://instagram.com/chetn_chaudhari?igshid=NzZlODBkYWE4Ng==",
        img: `${ChetanChaudhariV}`,
      },
    ],

    noncores: [
      {
        "ID": 61,
        "Email": "nimjeanika13@gmail.com",
        "name": "Anika Ramesh Nimje ",
        "position": "Volunteer",
        "DeptID": 12,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Elex",
        "RollNo": "J22",
        "instagram": "https:\/\/instagram.com\/anika_nimje_05?igshid=OGQ5ZDc2ODk2ZA==",
        "img": `${AnikaRameshNimje}`
       },
       {
        "ID": 62,
        "Email": "omshinde130606@gmail.com",
        "name": "Onkar babasaheb shinde",
        "position": "Volunteer",
        "DeptID": 12,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "B20",
        "instagram": "https:\/\/instagram.com\/om_shinde13?igshid=NzZlODBkYWE4Ng==",
        "linkedin": "No",
        "github": "No",
        "img": `${OmkarBabasahebShinde}`
       },
       {
        "ID": 65,
        "Email": "utkarshapattebahadur@gmail.com",
        "name": "Utkarsha Nitin Pattebahadur ",
        "position": "Volunteer",
        "DeptID": 12,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "IT",
        "RollNo": "D31",
        "instagram": "https:\/\/instagram.com\/utkarshapattebahadur?igshid=NGVhN2U2NjQ0Yg==",
        "img":`${UtkarshaNitinPattebahadur}`
       },
       {
        "ID": 82,
        "Email": "jayveersinh220@gmail.com",
        "name": "jayveersinh jadeja",
        "position": "Volunteer",
        "DeptID": 12,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Mtrx",
        "RollNo": "i29",
        "instagram": "https:\/\/instagram.com\/royal.jadejaa?igshid=MzMyNGUyNmU2YQ==",
        "img":`${JayveersinhJadeja}`
       },

    ]
  },
  {
    pos: "PhotoMedia",
    candidates: [
      {
        "ID": 41,
        "Email": "ghadigaonkarsasha2122@ternaengg.ac.in",
        "name": "Sasha Ghadigaonkar ",
        "position": "Photomedia Head",
        "DeptID": 8,
        "Position": "Core",
        "Year": "TE",
        "Branch": "Comps",
        "RollNo": "C02",
        "instagram": "https:\/\/instagram.com\/sashaghadigaonkar?igshid=OGQ5ZDc2ODk2ZA==",
        "img": `${SashaGhadigaonkar}`
       },
    ],

    noncores:[
      {
        "ID": 18,
        "Email": "chopadeshyam8@gmail.com",
        "name": "Shyam Chopade",
        "position": "Photomedia",
        "DeptID": 8,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "IT",
        "RollNo": "D50",
        "instagram": "https:\/\/www.instagram.com\/src.pod\/",
        "img": `${ShyamChopade}`
       },
    ]
  },

  {
    pos: "EventExecution",
    candidates: [
      {
        "ID": 5,
        "Email": "vedantkadam2003@gmail.com",
        "name": "Vedant Kadam",
        "position": "EventExecution Head",
        "DeptID": 5,
        "Position": "Core",
        "Year": "TE",
        "Branch": "AIDS",
        "RollNo": "A24",
        "instagram": "https:\/\/instagram.com\/v1704m?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
        "linkedin": "https:\/\/www.linkedin.com\/in\/vedant-kadam-888702203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "img":`}`
       },
       {
        "ID": 42,
        "Email": "aaryamhetre11@gmail.com",
        "name": "Aarya Shankar Mhetre",
        "position": "EventExecution Head",
        "DeptID": 5,
        "Position": "Core",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C38",
        "instagram": "https:\/\/instagram.com\/aaryamhetre_005?igshid=OGQ5ZDc2ODk2ZA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/aarya-mhetre-135894293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img":`${AaryaShankarMhetre}`
       },
       
       {
        "ID": 66,
        "Email": "rutzz2404@gmail.com",
        "name": "Rutuja Patil ",
        "position": "EventExecution Head",
        "DeptID": 5,
        "Position": "Core",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C65 ",
        "instagram": "https:\/\/instagram.com\/rutuja_.24?igshid=OGQ5ZDc2ODk2ZA==",
        "img": `${RutujaPatil}`
       },
    ],
    noncores: [
      {
        "ID": 48,
        "Email": "samikshaa.y19@gmail.com",
        "name": "Samiksha Sushant Yesade ",
        "position": "EventExecution",
        "DeptID": 5,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "AIDS",
        "RollNo": "E14",
        "instagram": "https:\/\/instagram.com\/_sam.19?igshid=MzMyNGUyNmU2YQ==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/samiksha-yesade-933976289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img":`${SamikshaSushantYesade}`
       },
       {
        "ID": 52,
        "Email": "sakshigadhave2223@ternaengg.ac.in",
        "name": "Sakshi Shankar Gadhave",
        "position": "EventExecution",
        "DeptID": 5,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C02 ",
        "instagram": "https:\/\/instagram.com\/sakshi._2012?igshid=OGQ5ZDc2ODk2ZA==",
        "linkedin": "No",
        "github": "No",
        "img":`${SakshiShankarGadhave}`
       },
       
       {
        "ID": 74,
        "Email": "kadumanswii@gmail.com",
        "name": "Manswi Nivruttinath Kadu ",
        "position": "EventExecution",
        "DeptID": 5,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "AIDS",
        "RollNo": "E54",
        "instagram": "https:\/\/instagram.com\/manswi.__?igshid=MmVlMjlkMTBhMg==",
        "img":`${ManswiNivruttinathKadu}`
       },
       {
        "ID": 76,
        "Email": "sapnarathore0810@gmail.com",
        "name": "Sapna Narendrasingh rathore",
        "position": "EventExecution",
        "DeptID": 5,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "AIDS",
        "RollNo": "E017",
        "instagram": "https:\/\/instagram.com\/justt.sapnaaaa?igshid=OGQ5ZDc2ODk2ZA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/sapna-rathore-71b9aa289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img": `${SapnaNarendresinghRathore}`
       },
       {
        "ID": 80,
        "Email": "siddhiipatil2004@gmail.com",
        "name": "Siddhi Sandip Patil",
        "position": "EventExecution",
        "DeptID": 5,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C03",
        "instagram": "NULL",
        "linkedin": "NULL",
        "github": "NULL",
        "img":`${SiddhiSandipPatil}`
       },
       {
        "ID": 83,
        "Email": "sakshivankudre13@gmail.com",
        "name": "Sakshi Avadhut Vankudre ",
        "position": "EventExecution",
        "DeptID": 5,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C04",
        "instagram": "https:\/\/instagram.com\/_seren_0907?igshid=OGQ5ZDc2ODk2ZA==",
        "img": `${SakshiAvadhutVankudre}`
       },
    ],
  },

  {
    pos: "Hospitality",
    candidates: [
      {
        "ID": 23,
        "Email": "tapaswinidesiti@gmail.com",
        "name": "Tapaswini Desiti",
        "position": "Hospitality Head",
        "DeptID": 6,
        "Position": "Core",
        "Year": "SE",
        "Branch": "AIDS",
        "RollNo": "A67",
        "instagram": "https:\/\/instagram.com\/tapaswini.09?igshid=OGQ5ZDc2ODk2ZA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/tapaswini-desiti-229656278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img":`${TapaswiniDesiti}`
       },
       {
        ID: 77,
        Email: "bhamreshankhin2122@ternaengg.ac.in",
        name: "Shankhin Bhamre ",
        position: "Hospitality",
        DeptID: 6,
        Position: "Core",
        Year: "TE",
        Branch: "AIDS",
        RollNo: "A05",
        instagram: "https://instagram.com/nashernick",
        linkedin: "https://www.linkedin.com/in/shankhin-bhamre-143299269",
        img: `${ShankhinBhamre}`,
      },
    ],
    noncores: [
      {
        "ID": 20,
        "Email": "vardhininandi2223@ternaengg.ac.in",
        "name": "Vardhini Subramanium Nandi ",
        "position": "Hospitality",
        "DeptID": 6,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "AIDS",
        "RollNo": "A51",
        "instagram": "https:\/\/instagram.com\/vardhini_nandi?igshid=MzMyNGUyNmU2YQ==",
        "img": `${VardhiniSubramanium}`
       },
       
       {
        "ID": 34,
        "Email": "ahireom110205@gmail.com",
        "name": "Om Ahire",
        "position": "Hospitality",
        "DeptID": 6,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Elex",
        "RollNo": "J09",
        "instagram": "https:\/\/instagram.com\/theomahire?igshid=OGQ5ZDc2ODk2ZA==",
        "img":`${OmAhire}`
       },
       {
        "ID": 67,
        "Email": "riyadevadiga12@gmail.com",
        "name": "Riya prasanna devadiga",
        "position": "Hospitality",
        "DeptID": 6,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "AIDS",
        "RollNo": "A66",
        "instagram": "https:\/\/instagram.com\/riya._devadiga?igshid=OGQ5ZDc2ODk2ZA==",
        "img": `${RiyaPrasannaDevadiga}`
       },
       {
        "ID": 68,
        "Email": "viscuslight@gmail.com",
        "name": "Manav Attam Jondhale ",
        "position": "Hospitality",
        "DeptID": 6,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "IT",
        "RollNo": "D38",
        "instagram": "https:\/\/instagram.com\/manavjondhale31?igshid=NGVhN2U2NjQ0Yg==",
        "img":`${ManavAttamJondhale}`
       },
       {
        "ID": 71,
        "Email": "parthsawantofficial10@gmail.com",
        "name": "Parth Rajan Sawant",
        "position": "Hospitality",
        "DeptID": 6,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "EXTC",
        "RollNo": "A15",
        "instagram": "https:\/\/instagram.com\/_arth.fr?igshid=YTQwZjQ0NmI0OA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/parth-sawant-b32b81256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img": `${ParthRajanSawant}`
       }
    ],
  },

  {
    pos: "Documentation",
    
    candidates: [
      {
        "ID": 3,
        "Email": "sankethshetty2122@ternaengg.ac.in",
        "name": "Sanketh Shetty",
        "position": "Documentation Head",
        "DeptID": 4,
        "Position": "Core",
        "Year": "TE",
        "Branch": "IT",
        "RollNo": "A13",
        "instagram": "https:\/\/www.instagram.com\/shetty_sanketh_1203\/",
        "linkedin": "https:\/\/www.linkedin.com\/in\/sanketh-shetty-705191230\/",
        "github": "https:\/\/github.com\/Sanketh1203",
        "img": `${SankethShetty}`
       },
       {
        "ID": 19,
        "Email": "harshgupta2223@ternaengg.ac.in",
        "name": "Harsh Shyam Gupta ",
        "position": "Documentation Head",
        "DeptID": 4,
        "Position": "Core",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C65",
        "instagram": "https:\/\/instagram.com\/guptaharsh__?igshid=NzZlODBkYWE4Ng==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/harsh-gupta-0aba23295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "github": "https:\/\/github.com\/login\/oauth\/authorize?allow_signup=false&authenticity_token=modYOmjXhQ-7tcSgtyfN1e6IqzqUeEDwYJ464AShjhYbqaKuP_nmUgErIBsdnOD8KMMFsDyfCyqNghvwJSFA9Q&client_id=3f8b8834a91f0caad392&code_challenge=BXJXAsIPv4tcJcF2kXAxk0PNbeUa14R7ICwXBehAsfY&code_challenge_method=S256&nonce=VwU3Vu5i2ybQyOuIR1h3dQ&redirect_uri=github%3A%2F%2Fcom.github.android%2Foauth&response_type=code&scope=user+repo+notifications+admin%3Aorg+read%3Adiscussion+user%3Aassets+project+workflow&skip_account_picker=true&state=-0i3k40eHd0ELKiKmNArZA",
        "img": `${HarshShyamGupta}`
       },
    ],

    noncores: [
      {
        "ID": 21,
        "Email": "shifamk.xc@gmail.com",
        "name": "Shifa Mohammad khurshid ",
        "position": "Documentation",
        "DeptID": 4,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "C49",
        "instagram": "NA",
        "linkedin": "NA",
        "github": "NA",
        "img":`${ShifaMohammedKurshid}`
       },
       {
        "ID": 24,
        "Email": "ankitamane4160@gmail.com",
        "name": "Ankita Laxman Mane ",
        "position": "Documentation",
        "DeptID": 4,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "C-54",
        "instagram": "NULL",
        "linkedin": "NULL",
        "github": "NULL",
        "img": `${AnkitaLaxmanMane}`
       },
       {
        "ID": 59,
        "Email": "aaryak1601@gmail.com",
        "name": "Aarya kulkarni",
        "position": "Documentation",
        "DeptID": 4,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "C17",
        "instagram": "https:\/\/instagram.com\/aarya_k16?igshid=OGQ5ZDc2ODk2ZA==",
        "img": `${AaryaKulkarni}`
       },
       {
        "ID": 64,
        "Email": "sanikazagade0729@gmail.com",
        "name": "Sanika Sandip Zagade ",
        "position": "Documentation",
        "DeptID": 4,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C37",
        "instagram": "https:\/\/instagram.com\/saniikaa_29?igshid=MzMyNGUyNmU2YQ==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/sanika-zagade-57aab0289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img":`${SanikaSandipZagade}`
       },
    ]
  },

  {
    pos: "Coordinator",

    candidates : [
      {
        "ID": 72,
        "Email": "kakadsarthak2122@ternaengg.ac.in",
        "name": "Sarthak kakad",
        "position": "Co-ordinators",
        "DeptID": 3,
        "Position": "Core",
        "Year": "TE",
        "Branch": "Comps",
        "RollNo": "B04",
        "instagram": "https:\/\/instagram.com\/sarthak_kakad?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr",
        "linkedin": "https:\/\/www.linkedin.com\/in\/sarthak-kakad-a8a839249\/",
        "github": "https:\/\/github.com\/sarthakkakad",
        "img": `${SarthakKakad}`
       },
       {
        "ID": 79,
        "Email": "rajkumar.tripat69@gmail.com",
        "name": "TRIPAT RAJKUMAR",
        "position": "Co-ordinators",
        "DeptID": 3,
        "Position": "Core",
        "Year": "TE",
        "Branch": "Comps",
        "RollNo": "B10",
        "instagram": "https:\/\/www.instagram.com\/rpatzz_z\/",
        "linkedin": "https:\/\/www.linkedin.com\/in\/tripat-rajkumar-7658a127b\/",
        "github": "https:\/\/github.com\/Rpatzzz",
        "img": `${TripatRajkumar}`
       },
       {
        ID: 92,
        Email: "",
        name: "Yash Kadu",
        position: "Co-ordinators",
        DeptID: 3,
        Position: "Core",
        Year: "TE",
        Branch: "Comps",
        RollNo: "B07",
        instagram: "https://www.instagram.com/yashkadu1434/",
        linkedin: "https://www.linkedin.com/in/yash-kadu-7b8928222/",
        github: "https://github.com/Yashk1434",
        img: `${YashKadu}`,
      },
    ]
    ,
    noncores :[]
  },

  {
    pos: "Publicity",

    candidates: [
      {
        "ID": 26,
        "Email": "chetancdhri@gmail.com",
        "name": "Chetan Chaudhari ",
        "position": "Publicity Head",
        "DeptID": 9,
        "Position": "Core",
        "Year": "SE",
        "Branch": "IT",
        "RollNo": "A14",
        "instagram": "www.instagram.com\/tfchetan",
        "img": `${ChetanChaudhari}`
       },
       
       {
        "ID": 31,
        "Email": "0afraz0khan7@gmail.com",
        "name": "Mohd Afraz Khan ",
        "position": "Publicity Head",
        "DeptID": 9,
        "Position": "Core",
        "Year": "SE",
        "Branch": "IT",
        "RollNo": "A34",
        "instagram": "https:\/\/www.instagram.com\/afraazkhann",
        "linkedin": "https:\/\/www.linkedin.com\/in\/afraz-khan21?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img":`${MohdAfrazKhan}`
       },
       {
        "ID": 32,
        "Email": "granthborhade2223@ternaengg.ac.in",
        "name": "GRANTH BORHADE ",
        "position": "Publicity Head",
        "DeptID": 9,
        "Position": "Core",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "B55",
        "instagram": "NULL",
        "linkedin": "NULL",
        "github": "NULL",
        "img": `${GranthBorhade}`
       }
    ],

    noncores: [
      {
        "ID": 27,
        "Email": "abhijeetdandge333d@gmail.com",
        "name": "Dandge Abhijeet Suresh ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "B036 ",
        "instagram": "https:\/\/instagram.com\/abhijeet_dandge?igshid=NzZlODBkYWE4Ng==",
        "img":`${AbhijeetSureshDandge}`
       },
       {
        "ID": 28,
        "Email": "luckyak413@gmail.com",
        "name": "Animesh Ajay Karmakar ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "AIDS",
        "RollNo": "A27",
        "instagram": "https:\/\/instagram.com\/animesh.karmakar_?igshid=NGVhN2U2NjQ0Yg==",
        "img": `${AnimeshAjayKarmakar}`
       },
       {
        "ID": 29,
        "Email": "chaudhariaditi46@gmail.com",
        "name": "Aditi Chaudhari ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "AIDS",
        "RollNo": "E51",
        "instagram": "https:\/\/instagram.com\/22adta?igshid=NzZlODBkYWE4Ng==",
        "img":`${AditiChaudhari}`
       },
       {
        "ID": 30,
        "Email": "shivamsuryawanshi59@gmail.com",
        "name": "Shivam Prakash Suryawanshi ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "B32",
        "instagram": "https:\/\/instagram.com\/shivam_suryawanshi24?igshid=OGQ5ZDc2ODk2ZA==",
        "img": `${ShivamPrakashSuryawanshi}`
       },
      
       {
        "ID": 35,
        "Email": "sanchitdongre2194@gmail.com",
        "name": "Sanchit Dongre ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "IT",
        "RollNo": "A69 ",
        "instagram": "https:\/\/www.instagram.com\/brown_.rang ",
        "linkedin": "https:\/\/www.linkedin.com\/in\/sanchit-dongre-8b9425231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img": `${SanchitDongre}`
       },
       {
        "ID": 36,
        "Email": "ojaskamble60@gmail.com",
        "name": "Ojas Kamble ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "EXTC",
        "RollNo": "A34",
        "instagram": "https:\/\/instagram.com\/_.0jasssss._?igshid=OGQ5ZDc2ODk2ZA==",
        "img": `${OjasKamble}`
       },
       {
        "ID": 37,
        "Email": "gholapanushka75@gmail.com",
        "name": "Anushka Gholap ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Elex",
        "RollNo": "J14",
        "instagram": "https:\/\/instagram.com\/anushka_.20?igshid=OGQ5ZDc2ODk2ZA==",
        "img":`${AnushkaGholap}`
       },
       {
        "ID": 38,
        "Email": "amberdey123@gmail.com",
        "name": "Amber dey ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Elex",
        "RollNo": "J07",
        "instagram": "https:\/\/www.instagram.com\/amber_dey\/",
        "linkedin": "None",
        "github": "None ",
        "img": `${AmberDey}`
       },
       {
        "ID": 39,
        "Email": "ssdeshmukh411@gmail.com",
        "name": "Siddhi Deshmukh ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "A06",
        "instagram": "https:\/\/instagram.com\/siddhhii.04?igshid=OGQ5ZDc2ODk2ZA==",
        "img":`${SiddhiDeshmukh}`
       },
       {
        "ID": 40,
        "Email": "rachna.m1112@gmail.com",
        "name": "RACHNA VISHAL MISHRA ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "AIDS",
        "RollNo": "E02",
        "instagram": "https:\/\/www.instagram.com\/richaa_1112\/",
        "github": "https:\/\/github.com\/rixxx11",
        "img": `${RachnaVishalMishra}`
       },
       {
        "ID": 47,
        "Email": "vaidehibhute.vab.1d@gmail.com",
        "name": "Vaidehi Bhute ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "IT",
        "RollNo": "A41",
        "instagram": "https:\/\/instagram.com\/vaidehi_15._?igshid=OGQ5ZDc2ODk2ZA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/vaidehi-bhute-303164271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img": `${VaidehiBhute}`
       },
       {
        "ID": 49,
        "Email": "satviksurshe@gmail.com",
        "name": "Satvik Surshe ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "C32",
        "instagram": "https:\/\/instagram.com\/stfusatvik?igshid=NGVhN2U2NjQ0Yg==",
        "img":`${SatvikSurshe}`
       },
       {
        "ID": 50,
        "Email": "vidhichoudhary263@gmail.com",
        "name": "Vidhi Kumari",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "EXTC",
        "RollNo": "F20",
        "instagram": "https:\/\/instagram.com\/vidhi_culous?igshid=OGQ5ZDc2ODk2ZA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/vidhi-kumari-131a49291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img": `${VidhiKumari}`
       },
       {
        "ID": 51,
        "Email": "payalandhale2005@gmail.com",
        "name": "Payal Santosh Andhale ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Comps",
        "RollNo": "C06",
        "instagram": "https:\/\/www.instagram.com\/payalandhale25",
        "github": "NULL",
        "img": `${PayalSantoshAndhale}`
       },
       {
        "ID": 55,
        "Email": "shrau.kularni@gmail.com",
        "name": "Shravani Kulkarni ",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "EXTC",
        "RollNo": "F21",
        "instagram": "https:\/\/instagram.com\/shravanikk?igshid=OGQ5ZDc2ODk2ZA==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/shravani-kulkarni-9b0594289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img": `${ShravniKulkarni}`
       },
       {
        "ID": 56,
        "Email": "samantamonojit5@gmail.com",
        "name": "Monojit Samanta",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "FE",
        "Branch": "Civil",
        "RollNo": "H024",
        "instagram": "https:\/\/instagram.com\/samanta__monojit?igshid=NGVhN2U2NjQ0Yg==",
        "linkedin": "https:\/\/www.linkedin.com\/in\/monojit-samanta-741618248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "img": `${MonojitSamanta}`
       },
       {
        "ID": 69,
        "Email": "gauriphanse2223@ternaengg.ac.in",
        "name": "Gauri Phanse",
        "position": "Publicity",
        "DeptID": 9,
        "Position": "NonCore",
        "Year": "SE",
        "Branch": "IT",
        "RollNo": "A59",
        "instagram": "https:\/\/instagram.com\/gauri_2904?igshid=NzZlODBkYWE4Ng==",
        "img":`${GauriPhanse}`
       },
    ]
  },

  {
    pos: "Sponsorship",

    candidates: [
      {
        "ID": 78,
        "Email": "",
        "name": "Divyesh Tupe",
        "position": "Sponsorship Head",
        "DeptID": 11,
        "Position": "Core",
        "Year": "",
        "Branch": "",
        "RollNo": "",
        "instagram": "NULL",
        "linkedin": "NULL",
        "github": "NULL",
        "img": ""
       },

       {
        "ID": 78,
        "Email": "kashishborele@gmail.com",
        "name": "Kashish Borele ",
        "position": "Sponsorship Head",
        "DeptID": 11,
        "Position": "Core",
        "Year": "SE",
        "Branch": "Comps",
        "RollNo": "B011",
        "instagram": "NULL",
        "linkedin": "NULL",
        "github": "NULL",
        "img": `${KashishBorele}`
       },
       {
        ID: 85,
        Email: "preetchule@gmail.com",
        name: "Preet Hule",
        position: "Sponsorship Head",
        DeptID: 11,
        Position: "Core",
        Year: "SE",
        Branch: "Comps",
        RollNo: "C19",
        instagram: "https://www.instagram.com/preethule?igshid=OGQ5ZDc2ODk2ZA==",
        linkedin: "https://www.linkedin.com/in/preet-c-hule-6860a2296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "NULL",
        img: `${PreetHule}`,
  },
    ],

    noncores: [
      {
        ID: 90,
        Email: "piyushkadu0777@gmail.com",
        name: "Piyush arun kadu",
        position: "Sponsorship",
        DeptID: 11,
        Position: "NonCore",
        Year: "SE",
        Branch: "Comps",
        RollNo: "B038",
        instagram:"NULL",
        img: `${PiyushKadu}`,
  },
  {
    ID: 88,
    Email: "shriyamishra726@gmail.com",
    name: "SHRIYA SHASHWAT MISHRA",
    position: "Sponsorship",
    DeptID: 11,
    Position: "NonCore",
    Year: "FE",
    Branch: "Comps",
    RollNo: "A37",
    instagram:"https://www.instagram.com/_shriyaa_07?igshid=YzAwZjE1ZTI0Zg==",
    img: `${ShriyaMishra}`,
},
{
  ID: 87,
  Email: "nidhizanjal@gmail.com",
  name: "Nidhi zanjal ",
  position: "Sponsorship",
  DeptID: 11,
  Position: "NonCore",
  Year: "SE",
  Branch: "EXTC",
  RollNo: "A55",
  instagram:"https://www.instagram.com/nidhi_zanjal29?igshid=YTQwZjQ0NmI0OA==",
  img: `${NidhiZanjal}`,
},
{
  ID: 86,
  Email: "tanishka.ugale@gmail.com",
  name: "Tanishka Ugale",
  position: "Sponsorship",
  DeptID: 11,
  Position: "NonCore",
  Year: "FE",
  Branch: "Elex",
  RollNo: "J33 ",
  instagram:"NULL",
  img: `${TanishkaUgale}`,
},
    ]
  }
  
]

const TeamsPills = () => {
  const [active, setActive] = useState(positions[0]?.pos);

  const handlePositionClick = (pos) => {
    setActive(pos);
  };

  return (
    <div className="w-full">
      <div className="lg:rounded-full rounded-3xl shadow-md p-2 flex flex-row md:flex-row space-x-4 flex-wrap md:flex-wrap md:space-x-4 justify-center">
        {positions.map((position) => (
          <button
            key={position.pos}
            onClick={() => handlePositionClick(position.pos)}
            className={`${
              active === position.pos
                ? " text-white font-semibold border-2 hover:text-purple-200"
                : " text-stone-400 font-semibold hover:text-white"
            } px-4 py-2 rounded-full transition duration-300 ease-in-out whitespace-nowrap`}
          >
            {position.pos}
          </button>
        ))}
      </div>

      {active && (
        <div className="mt-4 flex flex-wrap justify-center md:flex-nowrap">
          {positions
            .find((position) => position.pos === active)
            ?.candidates.map((candidate, index) => (
              <UserCard key={index} candidate={candidate} />
            ))}
        </div>
      )}

       {(active &&
        positions.find((position) => position.pos === active).noncores.length>0 ) && (
          <div className="mt-4">
            <h5 className="text-center text-white text-2xl font-bold my-4 md:text-2xl">
              Also have a look at our amazing team members!
            </h5>
            <div className="flex flex-wrap justify-center">
              {positions
                .find((position) => position.pos === active)
                ?.noncores.map((noncore, index) => (
                  <NonCoreUserCard key={index} candidate={noncore} />
                ))}
            </div>
          </div>
        )}

    </div>
  );
};

export default TeamsPills;
