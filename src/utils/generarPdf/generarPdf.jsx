import { jsPDF } from "jspdf";

export const generarPDF = (nombre, tipo, descripcion, imagen) => {
   const doc = new jsPDF();
  const img = new Image();

  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 30, "F");

  doc.setFillColor(15, 23, 42);
  doc.rect(0, 270, pageWidth, 30, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.text(nombre || "Sin nombre", pageWidth / 2, 18, { align: "center" });

  doc.setTextColor(0, 0, 0);
  img.src = imagen;
  img.onload = function () {
    const imgWidth = 150;
    const imgHeight = 80;
    const xImg = (pageWidth - imgWidth) / 2;
    doc.addImage(img, "JPEG", xImg, 40, imgWidth, imgHeight);
    
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text("Tipo:", 20, 140);
    doc.setFont(undefined, "normal");
    doc.text(tipo || "-", 35, 140);

    doc.setFont(undefined, "bold");
    doc.text("Descripción:", 20, 155);
    doc.setFont(undefined, "normal");
    const texto = doc.splitTextToSize(
      descripcion || "Sin descripción",
      pageWidth - 40
    );
    doc.text(texto, 20, 165);

    doc.setFontSize(10);
    doc.setTextColor(225, 226, 229);
    doc.text(
      "Sastre Juan Ignacio-FAI-4491   Gonzalez Marcos Nahuel-FAI-4869   Bascur Sofia Natali-FAI-4306",
      pageWidth / 2,
      285,
      { align: "center" }
    );
    doc.save(`${nombre || "archivo"}.pdf`);
  };
};