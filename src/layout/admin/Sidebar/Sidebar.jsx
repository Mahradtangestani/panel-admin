import React, { useContext } from 'react';
import { AdminContext } from '../../../context/AdminContext';
import Avatar from './Avatar';
import GroupTitle from './GroupTitle';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
    
    const {showSidebar} = useContext(AdminContext)

    return (
        <section id="sidebar_section">
        <div className={`mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? 'expanded' : null}`}>
            <div className="p-0 m-0">
                <Avatar name="مهراد تنگستانی" imagePath={"/assets/images/avatar/user1.jpg"}/>

                <SidebarItem icon="fas fa-tachometer-alt" title="داشبورد"/>

                <GroupTitle title="فروشگاه"/>

                <SidebarItem icon="fas fa-stream" title="مدیریت گروه محصول"/>
                <SidebarItem icon="fas fa-cube" title="مدیریت محصول"/>
                <SidebarItem icon="fas fa-copyright" title="مدیریت برند ها"/>
                <SidebarItem icon="fab fa-pagelines" title="مدیریت گارانتی ها"/>
                <SidebarItem icon="fas fa-palette" title="مدیریت رنگ ها"/>
                <SidebarItem icon="fas fa-percentage" title="مدیریت تخفیف ها"/>
                
                <GroupTitle title="سفارشات و سبد"/>

                <SidebarItem icon="fas fa-shopping-basket" title="مدیریت سبد ها"/>
                <SidebarItem icon="fas fa-luggage-cart" title="مدیریت سفارشات "/>
                <SidebarItem icon="fas fa-truck-loading" title="مدیریت نحوه ارسال "/>

                <GroupTitle title="کاربران و همکاران"/>
                
                <SidebarItem icon="fas fa-users" title="مشاهده کاربران "/>
                <SidebarItem icon="fas fa-user-tag" title=" نقش ها "/>
                <SidebarItem icon="fas fa-shield-alt" title=" مجوز ها "/>

                <GroupTitle title="ارتباطات"/>
                
                <SidebarItem icon="fas fa-question-circle" title="سوال ها "/>
                <SidebarItem icon="fas fa-comment" title=" نظرات "/>
            </div>
        </div>
    </section>
    );
}

export default Sidebar;
