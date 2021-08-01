import React, { useRef, useState } from 'react';
import useHover from '@react-hook/hover'
import Fade from 'react-reveal/Fade';

import Icon from '../Icon';
import Logo from '../Logo';
import { mainNav } from '../../data/nav';
import { className } from '../../utils';
import styles from './MainMenu.module.scss';
import Button from '../Button';
import { useEffect } from 'react';
import { useVisitor } from '../../contexts/visitorContext';

/* const NameLogo = ({ open }) => (
    <div { ...className(
        'overflow-hidden',
        open && 'max-w-screen ',
        !open && 'max-w-0'
    )}>
        <Fade when={ open } duration={ 500 }>
            <div className="py-4 pr-4">
                <h2 className="font-serif text-2xl text-white uppercase tracking-widest font-bold">Haegepoorters</h2>
            </div>
        </Fade>
    </div>
) */

const MenuItem = ({ slug, label, icon, open, ...otherProps }) => <Button 
    to={ slug } 
    theme="clear"
    className="py-5 pl-5 flex border-b-2 border-gray-200" 
    { ...otherProps }
>
    <Icon name={ icon } size="1.5rem" color={ '#4b5563' } className="mr-5" />
    <div { ...className(
        'overflow-hidden text-gray-600 flex items-center justify-between w-full',
        open && 'max-w-screen opacity-100',
        !open && 'max-w-0 opacity-0'
    )}>
        <span className="mr-28 font-medium whitespace-nowrap">{ label }</span>
        <Icon name="arrow-right" size="1.2rem" className="block ml-auto mr-5" />
    </div>
</Button>

const RoleSelector = ({ menuOpen }) => {
    const [ open, setOpen ] = useState(false)
    const { role, visitorRoles, setRole } = useVisitor()
    
    useEffect(() => {
        setOpen(false)
    }, [ menuOpen ])
    
    return (
        <div className="flex pr-4 cursor-pointer" onClick={() => setOpen(p => !p)}>
            <div className="mr-2">
                <div className="text-right transform -translate-y-0.5">
                    <span className="font-serif opacity-70 -mb-1 block whitespace-nowrap">ik ben </span>
                    <div className="text-xs uppercase tracking-wider font-medium whitespace-nowrap">
                        { role.label }
                    </div>
                </div>
                <Fade when={ open } collapse duration={ 1000 }>
                    <div>
                        { visitorRoles.map(({ value, label }) => (
                            (role.value !== value) && <Button
                                key={ value }
                                onClick={() => setRole(value)}
                                theme="clear"
                                className="text-right text-xs uppercase tracking-wider font-medium whitespace-nowrap w-full mb-1"
                            >{ label }</Button>
                        ))}
                    </div>
                </Fade>
            </div>
            <Icon size="1.2rem" name="settings-4" className="mt-2.5" />
        </div>
    )
}

const MainMenu = () => {
    const [ open, setOpen ] = useState(false)
    const container = useRef()
    const isHovered = useHover(container)
        
    useEffect(() => {
        if (isHovered) setOpen(true)
        else setOpen(false)
    }, [isHovered])
    
    return (
        <>
            <div 
                { ...className(
                    'bg-white h-screen fixed top-0 z-30',
                    open && 'shadow-xl'
                )}
                ref={ container }
                onMouseMove={() => setOpen(true)}
            >
                <div className="flex justify-between">
                    <Button theme="clear" to="/" className="block p-3 bg-red-500 h-fit" onClick={() => setOpen(false)}>
                        <Logo width="44.5px" />
                    </Button>
                    <div { ...className(
                        'overflow-hidden flex justify-end py-3',
                        open && 'max-w-screen',
                        !open && 'max-w-0'
                    )}>
                        <Fade when={ open } duration={ 500 }> 
                            <RoleSelector menuOpen={ open } />
                        </Fade>
                    </div>
                </div>
                <div className="border-r-2 border-gray-200 h-full">
                    <div className="">
                        {mainNav.map(({ icon, slug, label }, index) => (
                            <MenuItem
                                icon={ icon }
                                slug={ slug }
                                label={ label }
                                open={ open }
                                key={ index }
                                onClick={() => setOpen(false)}
                            />
                        ))}
                    </div>
                    <MenuItem
                        icon="search-2"
                        slug="/zoeken"
                        label="Zoeken"
                        open={ open }
                        onClick={() => setOpen(false)}
                    />
                </div>
            </div>
            { open && <div { ...className(styles.backdrop, 'w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-20 bg-black')} /> }
        </>
    )
}

// 74px

export default MainMenu