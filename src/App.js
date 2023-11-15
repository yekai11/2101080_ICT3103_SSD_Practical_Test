import { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [fileContent, setFileContent] = useState("");
  const handleFileChange = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;
        const lines = content.split("\n");
        setFileContent(lines);
      };

      reader.readAsText(file);
    }
  };

  const handleSubmit = () => {
    for (let i = 0; i < fileContent.length; i++) {
      if (fileContent[i] === password) {
        window.location.reload();
        return;
      } else {
        window.location.replace(`/result/password/${password}`);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input type="file" onChange={handleFileChange} />
        <h2>Password:</h2>
        <input minLength={10} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default App;
