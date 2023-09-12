const Footer = () => {
  return (
    <div className="md:w-[1100px] mx-auto py-16 flex flex-col items-center gap-[36px]">
      <div className="flex gap-[48px]">
        <img src="/images/facebook.svg" alt="facebook icon" />
        <img src="/images/instagram.svg" alt="instagram icon" />
        <img src="/images/twitter.svg" alt="twitter icon" />
        <img src="/images/youtube.svg" alt="youtube icon" />
      </div>
      <div className="flex gap-[48px] text-gray900">
        <h3 className="text-[18px] font-[700]">Conditions of Use</h3>
        <h3 className="text-[18px] font-[700]">Privacy & Policy</h3>
        <h3 className="text-[18px] font-[700]">Press Room</h3>
      </div>
    </div>
  );
};

export default Footer;
