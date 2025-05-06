const Footer = () => {
    return (
        <footer className="w-full text-white">
            <div className="bg-[#37475A] text-center p-3">Back to top</div>
            <div className="w-full bg-[#232F3E] p-10">
                <div className="m-auto max-w-6xl  grid grid-cols-4 py-6s">
                    <div>
                        <p className="font-semibold">Get to Know Us</p>
                        <ul className="text-gray-300 text-sm py-2">
                            <li>About Amazon</li>
                            <li>Careers</li>
                            <li>Press Releases</li>
                            <li>Amazon Science</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">Connect with Us</p>
                        <ul className="text-gray-300 text-sm py-2">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">
                            Make Money with Us</p>
                        <ul className="text-gray-300 text-sm py-2">
                            <li>Sell on Amazon</li>
                            <li>Sell under Amazon Accelerator</li>
                            <li>Protect and Build Your Brand</li>
                            <li>Amazon Global Selling</li>
                            <li>Supply to Amazon</li>
                            <li>Become an Affiliate</li>
                            <li>Fulfilment by Amazon</li>
                            <li>Advertise Your Products</li>
                            <li>Amazon Pay on Merchants
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">Let Us Help You</p>
                        <ul className="text-gray-300 text-sm py-2">
                            <li>Your Account</li>
                            <li>Returns Centre</li>
                            <li>Recalls and Product Safety Alerts</li>
                            <li>100% Purchase Protection</li>
                            <li>Amazon App Download</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="w-full border-gray-700" />
            <div className="bg-[#232F3E] flex justify-center p-10">
                <div
                    className="w-[116px] h-[48px] bg-no-repeat bg-[length:400px_auto] bg-[url('https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-reorg-privacy._CB546381437_.png')] scale-[0.65]"
                    style={{ backgroundPosition: "-9px -134px" }}
                    aria-label="Amazon"
                />
            </div>
            <div className="w-full bg-[#131A22] flex flex-col items-center text-gray-300 p-10">
                <div className="flex gap-5 text-sm ">
                    <p>Conditions of Use & Sale</p>
                    <p>Privacy Notice</p>
                    <p>Interest-Based Ads</p>
                </div>
                <p className="text-sm">© 1996-2025, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    );
};

export default Footer;
