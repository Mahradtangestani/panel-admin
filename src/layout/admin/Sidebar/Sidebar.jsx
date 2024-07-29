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

                <SidebarItem targetPath="/" icon="fas fa-tachometer-alt" title="داشبورد"/>

                <GroupTitle title="فروشگاه"/>

                <SidebarItem targetPath="/categories" icon="fas fa-stream" title="مدیریت گروه محصول"/>
                <SidebarItem targetPath="/products" icon="fas fa-cube" title="مدیریت محصول"/>
                <SidebarItem targetPath="/brands" icon="fas fa-copyright" title="مدیریت برند ها"/>
                <SidebarItem targetPath="/guarantee" icon="fab fa-pagelines" title="مدیریت گارانتی ها"/>
                <SidebarItem targetPath="/colors" icon="fas fa-palette" title="مدیریت رنگ ها"/>
                <SidebarItem targetPath="/discount" icon="fas fa-percentage" title="مدیریت تخفیف ها"/>
                
                <GroupTitle title="سفارشات و سبد"/>

                <SidebarItem targetPath="/cart" icon="fas fa-shopping-basket" title="مدیریت سبد ها"/>
                <SidebarItem targetPath="/manageorders" icon="fas fa-luggage-cart" title="مدیریت سفارشات "/>
                <SidebarItem targetPath="/managedelivery" icon="fas fa-truck-loading" title="مدیریت نحوه ارسال "/>

                <GroupTitle title="کاربران و همکاران"/>
                
                <SidebarItem targetPath="/userview" icon="fas fa-users" title="مشاهده کاربران "/>
                <SidebarItem targetPath="/role" icon="fas fa-user-tag" title=" نقش ها "/>
                <SidebarItem targetPath="/permissions" icon="fas fa-shield-alt" title=" مجوز ها "/>

                <GroupTitle title="ارتباطات"/>
                
                <SidebarItem targetPath="/questions" icon="fas fa-question-circle" title="سوال ها "/>
                <SidebarItem targetPath="/comment" icon="fas fa-comment" title=" نظرات "/>
            </div>
        </div>
    </section>
    );
}

export default Sidebar;
