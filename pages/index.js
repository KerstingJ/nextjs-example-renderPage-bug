import Head from "next/head";
import { withLayout } from "../layouts/withLayout";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return <h1>Hello</h1>;
}

export default withLayout(MainLayout)(Home);
