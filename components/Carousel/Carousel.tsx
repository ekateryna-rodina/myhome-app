// // import React, { Component } from "react";

import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

// // const Carousel: React.FC<{ Component: typeof Component; data?: any }> = ({
// //   Component,
// //   data,
// //   children,
// // }) => {
// //   return <Component>{children}</Component>;
// // };

// // export default Carousel;

// import React from "react";

// type CarouselProps = {
//   current: number;
//   setCurrent: Function;
//   total: number;
// };
// const Carousel =
//   (props: CarouselProps) => (WrappedComponent: any, data?: any) => {
//     class HOC extends React.Component {
//       constructor(props: any) {
//         super(props);
//         (this.onClickLeftHandler = () => {}),
//           (this.onClickRightHandler = () => {});
//         this.disabled = null;
//       }
//       onClickLeftHandler() {}
//       onClickRightHandler() {}
//       disabled = null;
//       render() {
//         return (
//           <WrappedComponent
//             onClickLeftHandler={this.onClickLeftHandler}
//             onClickRightHandler={this.onClickRightHandler}
//             disabled={this.disabled}
//           >
//             {this.props.children}
//           </WrappedComponent>
//         );
//       }
//     }
//     return HOC;
//   };
// export default Carousel;

const Carousel = (WrappedComponent: any, props: any) => {
  const MyComponent: React.FC<{
    current: number;
    setCurrent: Function;
    total: number;
  }> = ({ children, current, setCurrent, total }) => {
    const theme = useTheme();
    const [disabled, setDisabled] = useState<"left" | "right" | null>("left");
    useEffect(() => {
      console.log(current);
      if (current > 0 && current < total - 1) setDisabled(null);
      if (current <= 0) {
        setDisabled("left");
        return;
      }
      if (current >= total - 1) {
        setDisabled("right");
        return;
      }
    }, [current]);
    const onClickLeftHandler = () => {
      setCurrent(current - 1);
    };
    const onClickRightHandler = () => {
      setCurrent(current + 1);
    };
    const propsInjected = {
      onClickLeftHandler,
      onClickRightHandler,
      disabled,
    };
    return (
      <>
        <WrappedComponent {...propsInjected}>{children}</WrappedComponent>
      </>
    );
  };

  return MyComponent;
};

export default Carousel;
