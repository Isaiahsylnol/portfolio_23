import samplePDF from "./isaiah_sylvester.pdf";

export default function Resume() {
  return (
    <div className="h-screen w-full pt-16 pb-3">
      <iframe
        id="myPDF"
        style={{ width: "100%", height: "100%" }}
        src={samplePDF}
        frameborder="0"
      ></iframe>
    </div>
  );
}
