import React from 'react'

import Navbar from '../components/navbar/Navbar'
import MenuAddiction from '../components/menus/MenuAddiction'
import Footer from '../components/footer/Footer'
import AddictionHero from '../components/menus/AddictionHero'

const AddictionMenu = () => {
    return (
        <>
           <Navbar /> 
           <AddictionHero />
           <MenuAddiction />
           <Footer />
        </>
    )
}

export default AddictionMenu
