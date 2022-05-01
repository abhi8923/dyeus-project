import React from "react";
import About from "./about";
import Quality from "./quality";
import Welness from "./welness";
import Track from "./track";
import Period from "./period";
import Consult from "./consult";
import Period_box from "./period_box";
import Description from "./description";

const Content = ({ styles }) => {
  const { showSidebar } = styles;

  // const dummyPost = {
  //   title: `About Dyna`,
  //   summary:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // };

  // const posts = Array(20).fill(dummyPost);

  const contentStyle = {
    paddingTop: showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: showSidebar ? styles.sidebarWidth + 20 : 20
  };

  return (
    <div style={contentStyle}>
      <About />
      <Quality />
      <Welness />
      <Track />
      <Period />
      <Consult />
      <Period_box />
      <Description />

      {/*posts.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0, align: "center" }}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
        );
      })*/}
    </div>
  );
};

export default Content;
