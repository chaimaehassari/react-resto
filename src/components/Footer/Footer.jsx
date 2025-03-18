
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate(todayYear); 
    }, []);

  return (
    <footer className='bg-gray-800 text-white py-3'>
        <p className='text-center'>
            copyright &copy; made by 
            <Link to='https://www.ionutcora.com/' style={{textDecoration: 'none', color: '#E4C268'}} target="_blank">
                Ionut Cora
            </Link>, 2021-{newDate}
        </p>
    </footer>
  );
}

export default Footer;
