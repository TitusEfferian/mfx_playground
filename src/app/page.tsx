// 'use client';
// import { ClassNames, } from '@emotion/react';
// import { Button } from "@moneyforward/mfx_biz_react_components";


// export default function Home() {
//   return (
//     <>
//       <ClassNames>
//         {({ cx, css }) => {
//           return (
//             <Button className={cx(css({ backgroundColor: 'red' }))}>Hello world</Button>
//           )
//         }}
//       </ClassNames>
//     </>
//   );
// }

'use client';
import { Button } from "@moneyforward/mfx_biz_react_components";


export default function Home() {
  return (
    <>
      {
        // does not work
      }
      <Button css={{backgroundColor: 'red'}}>Hello world</Button>
    </>
  );
}

