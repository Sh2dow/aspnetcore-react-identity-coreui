import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from '../assets/brand/logo-negative'
import { sygnet } from '../assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useLocation } from 'react-router-dom'
// sidebar nav config
import navigation from '../_nav'
import routes from '../routes'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.side.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.side.sidebarShow)
    const { pathname } = useLocation();
    const pageNotFound = routes.find(a => a.path === pathname)
    return (
        <>
            {!(pathname.includes("/login") || pathname.includes("/register") || pathname.includes("/404") || pathname.includes("/500") || !pageNotFound) &&
     <CSidebar
                    position="fixed"
                    unfoldable={unfoldable}
                    visible={sidebarShow}
                    onVisibleChange={(visible) => {
                        dispatch({ type: 'set', sidebarShow: visible })
                    }}
                >
                    <CSidebarBrand className="d-none d-md-flex" to="/">
                        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
                        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
                    </CSidebarBrand>
                    <CSidebarNav>
                        <SimpleBar>
                            <AppSidebarNav items={navigation} />
                        </SimpleBar>
                    </CSidebarNav>
                    <CSidebarToggler
                        className="d-none d-lg-flex"
                        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
                    />
                </CSidebar>
            }
            </>
  )
}

export default React.memo(AppSidebar)
