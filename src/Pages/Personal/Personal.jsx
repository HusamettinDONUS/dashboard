import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import styles from "./personal.module.scss";
import CollapsibleTable from "./Components/CollapsibleTable";

const employees = [
  {
    name: "Mehmet KAYA",
    company: "pilstop",
    jobTitle: "Ön Yüz Geliştiricisi",
    jobDetails: { jobGroup: "İŞ GELİŞTİRME", serviceGroup: "HİZMET GRUBU" },
    dateInfo: { startDate: "01.08.2024", location: "TEMA PARK" },
    info: { previousSalary: "****", salary: "****", increaseRate: "72%" },
    education: "ÜNİVERSİTE",
    age: 27,
    maritalStatus: "BEKAR",
    pdkss: {
      entryExitDates: [
        {
          date: "01.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "02.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "03.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "04.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "05.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "06.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "07.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "08.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "09.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "10.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "01.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "02.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "03.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "04.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "05.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "06.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "07.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "08.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "09.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "10.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
      ],
    },
  },
  {
    name: "Ayşe YILMAZ",
    company: "pilstop",
    jobTitle: "Backend Developer",
    jobDetails: { jobGroup: "YAZILIM", serviceGroup: "TEKNOLOJİ" },
    dateInfo: { startDate: "15.05.2023", location: "ANKARA" },
    info: { previousSalary: "****", salary: "****", increaseRate: "50%" },
    education: "ÜNİVERSİTE",
    age: 30,
    maritalStatus: "EVLİ",
    pdkss: {
      entryExitDates: [
        {
          date: "01.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "02.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "03.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "04.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "05.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "06.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "07.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "08.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "09.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "10.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
      ],
    },
  },
  {
    name: "Ali VURAL",
    company: "pilstop",
    jobTitle: "Data Scientist",
    jobDetails: { jobGroup: "VERİ ANALİZİ", serviceGroup: "ARAŞTIRMA" },
    dateInfo: { startDate: "10.12.2022", location: "İSTANBUL" },
    info: { previousSalary: "****", salary: "****", increaseRate: "60%" },
    education: "YÜKSEK LİSANS",
    age: 35,
    maritalStatus: "BEKAR",
    pdkss: {
      entryExitDates: [
        {
          date: "01.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "02.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "03.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "04.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "05.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "06.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "07.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "08.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "09.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "10.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
      ],
    },
  },
  {
    name: "Fatma DEMİR",
    company: "venezia",
    jobTitle: "Project Manager",
    jobDetails: { jobGroup: "PROJE YÖNETİMİ", serviceGroup: "FİNANS" },
    dateInfo: { startDate: "20.03.2021", location: "İZMİR" },
    info: { previousSalary: "****", salary: "****", increaseRate: "45%" },
    education: "ÜNİVERSİTE",
    age: 40,
    maritalStatus: "EVLİ",
    pdkss: {
      entryExitDates: [
        {
          date: "01.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "02.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "03.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "04.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "05.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "06.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "07.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "08.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "09.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "10.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
      ],
    },
  },
  {
    name: "Canan ÇELİK",
    company: "venezia",
    jobTitle: "UX Designer",
    jobDetails: { jobGroup: "TASARIM", serviceGroup: "SAĞLIK" },
    dateInfo: { startDate: "05.07.2020", location: "ANTALYA" },
    info: { previousSalary: "****", salary: "****", increaseRate: "55%" },
    education: "ÜNİVERSİTE",
    age: 28,
    maritalStatus: "BEKAR",
    pdkss: {
      entryExitDates: [
        {
          date: "01.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "02.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "03.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "04.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "05.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
        {
          date: "06.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "07.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "08.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "09.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },

        {
          date: "10.08.2024",
          entryTime: "09:00",
          exitTime: "18:00",
          cartDetails: [
            {
              cartReader: "venezia",
              hour: "09:00",
            },
            {
              cartReader: "vialand",
              hour: "10:00",
            },
            {
              cartReader: "venezia",
              hour: "11:00",
            },
          ],
        },
      ],
    },
  },
];

const Personal = () => {
  const [sortedEmployees, setSortedEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedTab, setSelectedTab] = useState("");

  const handleCompanySelect = (selectedCompany) => {
    setSelectedEmployee(null);
    const filteredEmployees = employees.filter(
      (employee) => employee.company === selectedCompany
    );
    setSortedEmployees(filteredEmployees);
  };

  const handleSearch = (searchTerm) => {
    setSelectedEmployee(null);
    if (searchTerm.trim() === "") {
      setSortedEmployees([]);
      return;
    }
    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedEmployees(filteredEmployees);
  };

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className={styles.container}>

      <div className={styles.headers}>
        <Header />
        <Search onCompanySelect={handleCompanySelect} onSearch={handleSearch} />
      </div>
      {selectedEmployee ? (
        <div className={styles.personalContainer}>
          <div className={styles.main}>
            <div className={styles.userDetails}>
              <img
                className={styles.userImage}
                src="https://i.pravatar.cc/250?img=68"
                alt="profile"
              />
              <div className={styles.userInfo}>
                <div className={styles.userName}>{selectedEmployee.name}</div>
                <div className={styles.userJobTitle}>
                  {selectedEmployee.jobTitle}
                </div>
              </div>
            </div>

            <div className={styles.tabs}>
              <button
                onClick={() => setSelectedTab("CV")}
                className={styles.tab}
              >
                CV
              </button>
              <button
                onClick={() => setSelectedTab("Salary")}
                className={styles.tab}
              >
                Maaş Bilgisi
              </button>

              <button
                onClick={() => setSelectedTab("PDKSS")}
                className={styles.tab}
              >
                PDKSS
              </button>
            </div>

            <div className={styles.employeeInfo}>
              <div className={styles.infoItem}>
                <span>Öğrenim Durumu</span>
                <span>{selectedEmployee.education}</span>
              </div>
              <div className={styles.infoItem}>
                <span>Yaş</span>
                <span>{selectedEmployee.age}</span>
              </div>
              <div className={styles.infoItem}>
                <span>Medeni Durumu</span>
                <span>{selectedEmployee.maritalStatus}</span>
              </div>
            </div>

            <div className={styles.employeeInfo}>
              <div className={styles.infoItem}>
                <span>Önceki Maaş</span>
                <span>{selectedEmployee.info.previousSalary}</span>
              </div>
              <div className={styles.infoItem}>
                <span>Maaş</span>
                <span>{selectedEmployee.info.salary}</span>
              </div>
              <div className={styles.infoItem}>
                <span>Artış oranı</span>
                <span>{selectedEmployee.info.increaseRate}</span>
              </div>
            </div>
          </div>

          {selectedTab === "PDKSS" && (
            <div className={styles.PDKSS}>
              <CollapsibleTable pdkss={selectedEmployee.pdkss} />
            </div>
          )}

          {selectedTab === "Salary" && (
            <div className={styles.salary}>

              <div className={styles.salaryInfo}>
                <div className={styles.salaryItem}>
                  <h5 >Önceki Maaş</h5>
                  <p >450,000₺</p>
                </div>
                <div className={styles.salaryItem}>
                  <h5 >Mevcut Maaş</h5>
                  <p >500,000₺</p>
                </div>
                <div className={styles.salaryItem}>
                  <h5>Artış</h5>
                  <p>{(((500000 - 450000) / 450000) * 100).toFixed(2)}%</p>
                </div>
              </div>

              <div className={styles.salaryInfoDetails} style={{ marginTop: '20px' }}>
                <div >
                  <span>Prim:</span>
                  <span>15000₺</span>
                </div>
                <div>
                  <span>Kesintiler:</span>
                  <span>3000₺</span>
                </div>
                <div>
                  <span>Net Maaş:</span>
                  <span>512,000₺</span>
                </div>
              </div>
            </div>
          )}

          {/* {selectedTab === "CV" && ()} */}
        </div>
      ) : (
        sortedEmployees.length > 0 && (
          <div className={styles.employeeList}>
            {sortedEmployees.map((employee, index) => (
              <div
                key={index}
                className={styles.employeeItem}
                onClick={() => handleSelectEmployee(employee)}
              >
                <span className={styles.employeeName}>{employee.name}</span>
                <span className={styles.employeeJobTitle}>
                  {employee.jobTitle}
                </span>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Personal;
