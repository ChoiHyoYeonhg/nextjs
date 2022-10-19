import Layout from "../components/Layout";
import "../styles/globals.css";

function Myapp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Myapp;
