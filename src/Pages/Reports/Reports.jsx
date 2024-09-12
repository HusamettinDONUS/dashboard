import React, { useState } from "react";
import styles from "./reports.module.scss";
import Header from "../../Components/Header/Header";
import report from "../../assets/Images/report.png";
import { TbReportAnalytics } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";

const ReportsPage = () => {
  const companies = ["Hepsi", "Vialand", "Venezia", "Pilstop"];
  const reportTypes = ["Farketmez", "Yıllık", "Aylık", "Günlük"];

  const reports = [
    {
      company: "Vialand",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Vialand",
      type: "Aylık",
      name: "2023 Rapor",
      date: "2023-03-31",
      report: report,
    },
    {
      company: "Venezia",
      type: "Aylık",
      name: "Nisan 2023 Raporu",
      date: "2023-07-31",
      report: report,
    },
    {
      company: "Pilstop",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Venezia",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Vialand",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Vialand",
      type: "Aylık",
      name: "2023 Rapor",
      date: "2023-03-31",
      report: report,
    },
    {
      company: "Venezia",
      type: "Aylık",
      name: "Nisan 2023 Raporu",
      date: "2023-07-31",
      report: report,
    },
    {
      company: "Pilstop",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Venezia",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Vialand",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Vialand",
      type: "Aylık",
      name: "2023 Rapor",
      date: "2023-03-31",
      report: report,
    },
    {
      company: "Venezia",
      type: "Aylık",
      name: "Nisan 2023 Raporu",
      date: "2023-07-31",
      report: report,
    },
    {
      company: "Pilstop",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Venezia",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Vialand",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Vialand",
      type: "Aylık",
      name: "2023 Rapor",
      date: "2023-03-31",
      report: report,
    },
    {
      company: "Venezia",
      type: "Aylık",
      name: "Nisan 2023 Raporu",
      date: "2023-07-31",
      report: report,
    },
    {
      company: "Pilstop",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
    {
      company: "Venezia",
      type: "Yıllık",
      name: "2023 Yıllık Raporu",
      date: "2023-12-31",
      report: report,
    },
  ];

  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [selectedReportType, setSelectedReportType] = useState(reportTypes[0]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleSpanClick = (report) => {
    setSelectedReport(report);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedReport(null);
  };

  const filteredReports = reports.filter(
    (report) =>
      report.company === selectedCompany && report.type === selectedReportType
  );

  return (
    <div className={styles.reportsPage}>
      <Header />

      {/* Selection Section */}
      <div className={styles.filters}>
        <div>
          <label htmlFor="company">Şirket Seçiniz</label>
          <select
            id="company"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="reportType">Rapor Tipi</label>
          <select
            id="reportType"
            value={selectedReportType}
            onChange={(e) => setSelectedReportType(e.target.value)}
          >
            {reportTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reports Table */}
      <div className={styles.table}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <div className={styles.th}>
                  <span>
                    <MdOutlineDriveFileRenameOutline />
                  </span>
                  <span>Rapor Adı</span>
                </div>
              </th>
              <th>
                <div className={styles.th}>
                  <span>
                    <CiCalendarDate />
                  </span>
                  <span>Tarih</span>
                </div>
              </th>
              <th>
                <div className={styles.th}>
                  <span>
                    <CiFileOn />
                  </span>
                  <span>Dosya</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map((report, index) => (
                <tr key={index}>
                  <td>{report.name}</td>
                  <td>{report.date}</td>
                  <td>
                    <span onClick={() => handleSpanClick(report)}>
                      <TbReportAnalytics className={styles.file} />
                      <span hidden>{report.report}</span>
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">
                  No reports available for the selected criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closePopup}>
              X
            </button>
            <img
              src={selectedReport.report}
              alt="Report"
              className={styles.reportImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
