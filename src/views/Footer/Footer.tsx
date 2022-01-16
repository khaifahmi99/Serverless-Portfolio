const Footer = (): JSX.Element => (
    <div className='w-full h-16 bg-indigo-100 flex justify-center items-center'>
        <div onClick={() => window.open('https://github.com/khaifahmi99')}>
            <h1 className='font-semibold text-gray-500 hover:text-indigo-600 hover:font-bold hover:italic'>Designed & Build by Khai Fahmi Zaki</h1>
        </div>
    </div>
);

export default Footer;