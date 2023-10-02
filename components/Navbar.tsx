import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">
            Trang chủ
          </Link>
          <Link className="navbar__link relative" href="#">
            HANU SOUVERNIR
          </Link>
          {/* <Link className="navbar__link relative" href="#">
            {`Bình-Ly nước`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`Sổ tay`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`Áo thun-Bút`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`Nón`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`Phụ kiện`}
          </Link> */}
          <Link className="navbar__link relative" href="#">
            Tin tức
          </Link>
          <Link className="navbar__link relative" href="#">
            Giới thiệu
          </Link>
          <Link className="navbar__link relative" href="#">
            Hỗ trợ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;