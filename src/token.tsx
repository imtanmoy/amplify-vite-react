import { fetchAuthSession } from "aws-amplify/auth";
import { useState, useEffect } from "react";

export const Token = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);


  useEffect(() => {
    const fetchToken = async () => {
      const session = await fetchAuthSession();
      setAccessToken(session.tokens?.accessToken.toString() || null);
    };

    fetchToken();
  }, []);

  return (
    <div style={{
      padding: "1rem",
      border: "1px solid #333",
      borderRadius: "0.25rem",
      margin: "1rem 0",
      width: "70vw",
      overflowWrap: "anywhere",
    }}>
      <h1>Access Token</h1>
      <code>{accessToken}</code>
      <button onClick={() => navigator.clipboard.writeText(accessToken || "")}>
        Copy to clipboard
      </button>
    </div>
  );
}