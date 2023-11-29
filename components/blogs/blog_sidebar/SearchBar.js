// <<<<<<< feature/sidebar
import {useEffect, useState, useRef} from "react";
import Image from "next/image";
import searchIcon from '../../../public/assets/img/icon4.png';

const SearchBar = ({onSubmit}) => {

    const [val, setVal] = useState("");
// =======
// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import Image from "next/image";
// const SearchBar = (props) => {
//   const { onSubmit } = props;
// //   const [val, setVal] = useState("");
// >>>>>>> main
    const typingTimeout = useRef(null);

    const handleOnChange = (e) => {
        const value = e.target.value;
        setVal(e.target.value);
// <<<<<<< feature/sidebar
        if (!onSubmit) return;
        if (typingTimeout.current) {
            clearTimeout(typingTimeout.current)
        }
        ;
        typingTimeout.current = setTimeout(() => {
            const search = value;
            onSubmit(search);
        }, 1000)
    }
    return (
        <div className="widget widget-search" width='100%'>
            <form>
                <input
                    type="text" name="search" placeholder="Search" value={val} onChange={handleOnChange}/>
                <button type="submit" onSubmit={() => {
                }}>
                    <Image src={searchIcon}
                           width="20px"
                           height="20px"
                           alt="searchIcon"/>
                </button>
            </form>
        </div>

    );
}
// =======
//     if (!onSubmit) return;

//     if (typingTimeout.current) {
//       clearTimeout(typingTimeout.current);
//     }

//     typingTimeout.current = setTimeout(() => {
//       const search = value;
//       onSubmit(search);
//     }, 1000);
//   };
//   return (
//     <div className="widget widget-search" width="100%">
//       <form>
//         <input
//           type="text"
//           name="search"
//           placeholder="Search"
//           value={val}
//           onChange={handleOnChange}
//         />
//         <button type="submit">
//           <Image src="/assets/img/icon4.png" width={21} height={22} alt="" />
//         </button>
//       </form>
//     </div>
//   );
// };
//>>>>>>> main

export default SearchBar;
