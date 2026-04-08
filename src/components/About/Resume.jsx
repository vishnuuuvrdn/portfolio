import Resume from '../../assets/Resume.pdf';

export default function ResumeViewer() {

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <iframe
        src={Resume}
        title="Resume Viewer"
        width="100%"
        height="100%"
        style={{ border: "none", flex: 1 }}
      />
    </div>
  );
}
