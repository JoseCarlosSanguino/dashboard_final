import { lazy } from "react";
import AuthRoutes from "./AuthRoutes";

//Lazy loading and code splitting
//apps
const Chat = lazy(() => import("../views/chat/Chat"));
const Contacts = lazy(() => import("../views/contacts/Contacts"));
const Email = lazy(() => import("../views/email/Email"));
const Notes = lazy(() => import("../views/notes/Notes"));
const Todo = lazy(() => import("../views/todo/Todo"));
//dashboards
const FirstDashboard = lazy(() => import("../views/dashboards/FirstDashboard"));
const SecondDashboard = lazy(() =>
  import("../views/dashboards/SecondDashboard")
);
const ThirdDashboard = lazy(() => import("../views/dashboards/ThirdDashboard"));
const FourthDashboard = lazy(() =>
  import("../views/dashboards/FourthDashboard")
);
const FifthDashboard = lazy(() => import("../views/dashboards/FifthDashboard"));
const SixthDashboard = lazy(() => import("../views/dashboards/SixthDashboard"));
//Ui-components Dropdown
const Alerts = lazy(() => import("../views/ui-components/Alert"));
const Badges = lazy(() => import("../views/ui-components/Badge"));
const Spinners = lazy(() => import("../views/ui-components/Spinner"));
const Toasts = lazy(() => import("../views/ui-components/Toasts"));
const BreadCrumbs = lazy(() => import("../views/ui-components/Breadcrumb"));
const Buttons = lazy(() => import("../views/ui-components/Button"));
const Dropdowns = lazy(() => import("../views/ui-components/DropDown"));
const BtnGroups = lazy(() => import("../views/ui-components/BtnGroup"));
const Cards = lazy(() => import("../views/ui-components/Cards"));
const CollapseComponent = lazy(() => import("../views/ui-components/Collapse"));
const CarouselComponent = lazy(() => import("../views/ui-components/Carousel"));
const JumbotronComponent = lazy(() =>
  import("../views/ui-components/Jumbotron")
);
const LayoutComponent = lazy(() => import("../views/ui-components/Layout"));
const ListComponent = lazy(() => import("../views/ui-components/ListGroup"));
const MediaComponent = lazy(() => import("../views/ui-components/Media"));
const ModalComponent = lazy(() => import("../views/ui-components/Modal"));
const NavbarComponent = lazy(() => import("../views/ui-components/Navbar"));
const NavsComponent = lazy(() => import("../views/ui-components/Navs"));
const PaginationComponent = lazy(() =>
  import("../views/ui-components/Pagination")
);
const PopoverComponent = lazy(() => import("../views/ui-components/Popover"));
const ProgressComponent = lazy(() => import("../views/ui-components/Progress"));
const TableComponent = lazy(() => import("../views/ui-components/Table"));
const TabsComponent = lazy(() => import("../views/ui-components/Tabs"));
const TooltipComponent = lazy(() => import("../views/ui-components/ToolTip"));
//Sample Pages Dropdown
const Starterkit = lazy(() => import("../views/sample-pages/StarterKit"));
const Profile = lazy(() => import("../views/sample-pages/Profile"));
const Searchresult = lazy(() => import("../views/sample-pages/SearchResult"));
const Gallery = lazy(() => import("../views/sample-pages/Gallery"));
const Helperclass = lazy(() => import("../views/sample-pages/HelperClass"));
const Widgets = lazy(() => import("../views/widget/Widget"));
const Calendar = lazy(() => import("../views/calendar/Calendar"));

//Chart Pages Dropdown
const Chartjs = lazy(() => import("../views/charts/ChartJs"));
const Chartc3 = lazy(() => import("../views/charts/C3Chart"));
const Apexcharts = lazy(() => import("../views/charts/ApexCharts"));
//Icon Pages Dropdown
const Materialicon = lazy(() => import("../views/icons/Material"));
const FontAwesome = lazy(() => import("../views/icons/FontAwesome"));
const Themify = lazy(() => import("../views/icons/Themify"));
const Weather = lazy(() => import("../views/icons/Weather"));
const SimpleLine = lazy(() => import("../views/icons/SimpleLine"));
const FlagIcon = lazy(() => import("../views/icons/Flag"));
//Form Layout Pages Dropdown
const Basicform = lazy(() => import("../views/form-layouts/Basic"));
const FormInputs = lazy(() => import("../views/form-layouts/FormInputs"));
const FormGroups = lazy(() => import("../views/form-layouts/FormGroups"));
const FormGrids = lazy(() => import("../views/form-layouts/FormGrids"));
//Form-pickers Pages Dropdown
const Datepicker = lazy(() => import("../views/form-pickers/DateTimePicker"));
const Tagselect = lazy(() => import("../views/form-pickers/TagSelect"));
//Form Validation Page
const FormValidate = lazy(() =>
  import("../views/form-validation/FormValidation")
);
//Form Wizard Page
const FormSteps = lazy(() => import("../views/steps/Steps"));
//Table Pages Dropdown
const Basictable = lazy(() => import("../views/tables/TableBasic"));
const CustomReactTable = lazy(() => import("../views/tables/CustomReactTable"));
const Datatable = lazy(() => import("../views/tables/ReactBootstrapTable"));

const CustomVectorMap = lazy(() => import("../views/maps/CustomVectorMap"));
const Auths = [].concat(AuthRoutes);

var ThemeRoutes = [
  {
    navlabel: true,
    name: "Personal",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: "/dashboards",
    name: "Dashboards",
    state: "dashboardpages",
    icon: "mdi mdi-av-timer",
    extra: "",
    child: [
      {
        path: "/dashboards/firstdashboard",
        name: "Dashboard 1",
        icon: "mdi mdi-adjust",
        component: FirstDashboard,
      },
      {
        path: "/dashboards/seconddashboard",
        name: "Dashboard 2",
        icon: "mdi mdi-adjust",
        component: SecondDashboard,
      },
      {
        path: "/dashboards/thirddashboard",
        name: "Dashboard 3",
        icon: "mdi mdi-adjust",
        component: ThirdDashboard,
      },
      {
        path: "/dashboards/fourthdashboard",
        name: "Dashboard 4",
        icon: "mdi mdi-adjust",
        component: FourthDashboard,
      },
      {
        path: "/dashboards/fifthdashboard",
        name: "Dashboard 5",
        icon: "mdi mdi-adjust",
        component: FifthDashboard,
      },
      {
        path: "/dashboards/sixthdashboard",
        name: "Dashboard 6",
        icon: "mdi mdi-adjust",
        component: SixthDashboard,
      },
    ],
  },
  {
    collapse: true,
    path: "/ui-components",
    name: "Ui",
    state: "uicomponents",
    icon: "mdi mdi-format-color-fill",
    extra: "mega-dropdown",
    child: [
      {
        path: "/ui-components/Alert",
        name: "Alerts",
        icon: "mdi mdi-comment-processing-outline",
        component: Alerts,
      },
      {
        path: "/ui-components/Badge",
        name: "Badges",
        icon: "mdi mdi-arrange-send-backward",
        component: Badges,
      },
      {
        path: "/ui-components/Breadcrumb",
        name: "Breadcrumbs",
        icon: "mdi mdi-equal",
        component: BreadCrumbs,
      },
      {
        path: "/ui-components/Button",
        name: "Buttons",
        icon: "mdi mdi-toggle-switch",
        component: Buttons,
      },
      {
        path: "/ui-components/Dropdown",
        name: "Button Dropdown",
        icon: "mdi mdi-cards-variant",
        component: Dropdowns,
      },
      {
        path: "/ui-components/BtnGroup",
        name: "Button Group",
        icon: "mdi mdi-checkbox-multiple-blank",
        component: BtnGroups,
      },
      {
        path: "/ui-components/Card",
        name: "Cards",
        icon: "mdi mdi-credit-card-multiple",
        component: Cards,
      },
      {
        path: "/ui-components/Collapse",
        name: "Collapse",
        icon: "mdi mdi-elevator",
        component: CollapseComponent,
      },
      {
        path: "/ui-components/Carousel",
        name: "Carousel",
        icon: "mdi mdi-view-carousel",
        component: CarouselComponent,
      },
      {
        path: "/ui-components/Jumbotron",
        name: "Jumbotron",
        icon: "mdi mdi-hamburger",
        component: JumbotronComponent,
      },
      {
        path: "/ui-components/Layout",
        name: "Layout",
        icon: "mdi mdi-apps",
        component: LayoutComponent,
      },
      {
        path: "/ui-components/ListGroup",
        name: "List Group",
        icon: "mdi mdi-format-list-bulleted",
        component: ListComponent,
      },
      {
        path: "/ui-components/Media",
        name: "Media",
        icon: "mdi mdi-folder-multiple-image",
        component: MediaComponent,
      },
      {
        path: "/ui-components/Modal",
        name: "Modal",
        icon: "mdi mdi mdi-tablet",
        component: ModalComponent,
      },
      {
        path: "/ui-components/Navbar",
        name: "Navbar",
        icon: "mdi mdi-page-layout-header",
        component: NavbarComponent,
      },
      {
        path: "/ui-components/Navs",
        name: "Navs",
        icon: "mdi mdi-panorama-wide-angle",
        component: NavsComponent,
      },
      {
        path: "/ui-components/Pagination",
        name: "Pagination",
        icon: "mdi mdi-priority-high",
        component: PaginationComponent,
      },
      {
        path: "/ui-components/Popover",
        name: "Popover",
        icon: "mdi mdi-pencil-circle",
        component: PopoverComponent,
      },
      {
        path: "/ui-components/Progress",
        name: "Progress",
        icon: "mdi mdi-poll",
        component: ProgressComponent,
      },
      {
        path: "/ui-components/Table",
        name: "Tables",
        icon: "mdi mdi-border-none",
        component: TableComponent,
      },
      {
        path: "/ui-components/Tabs",
        name: "Tabs",
        icon: "mdi mdi-tab-unselected",
        component: TabsComponent,
      },
      {
        path: "/ui-components/Tooltip",
        name: "Toltips",
        icon: "mdi mdi-image-filter-vintage",
        component: TooltipComponent,
      },
      {
        path: "/ui-components/Spinner",
        name: "Spinner",
        icon: "mdi mdi-image-filter-vintage",
        component: Spinners,
      },
      {
        path: "/ui-components/Toasts",
        name: "Toasts",
        icon: "mdi mdi-image-filter-vintage",
        component: Toasts,
      },
    ],
  },
  {
    navlabel: true,
    name: "Apps",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: "/apps",
    name: "Apps",
    state: "openApps",
    icon: "mdi mdi-apps",
    extra: "",
    child: [
      {
        path: "/apps/chat",
        name: "Chat",
        icon: "mdi mdi-comment-processing-outline",
        component: Chat,
      },
      {
        path: "/apps/email",
        name: "Email",
        icon: "mdi mdi-inbox-arrow-down",
        component: Email,
      },
      {
        path: "/apps/contacts",
        name: "Contacts",
        icon: "mdi mdi-contacts",
        component: Contacts,
      },
      {
        path: "/apps/calendar",
        name: "Calendar",
        icon: "mdi mdi-calendar",
        component: Calendar,
      },
      {
        path: "/apps/notes",
        name: "Notes",
        icon: "mdi mdi-note",
        component: Notes,
      },
      {
        path: "/todos",
        name: "Todo",
        icon: "mdi mdi-file",
        component: Todo,
      },
    ],
  },
  {
    navlabel: true,
    name: "Forms",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: "/forms",
    name: "Forms",
    state: "openApps",
    icon: "mdi mdi-cards-outline",
    extra: "",
    child: [
      {
        collapse: true,
        name: "Form Layouts",
        cstate: "formlayoutPages",
        icon: "mdi mdi-arrange-bring-forward",
        subchild: [
          {
            path: "/forms/form-layouts/FormInputs",
            name: "Form Inputs",
            icon: "mdi mdi-priority-low",
            component: FormInputs,
          },
          {
            path: "/forms/form-layouts/FormGroups",
            name: "Form Groups",
            icon: "mdi mdi-rounded-corner",
            component: FormGroups,
          },
          {
            path: "/forms/form-layouts/FormGrids",
            name: "Form Grids",
            icon: "mdi mdi-select-all",
            component: FormGrids,
          },
          {
            path: "/forms/form-layouts/Basic",
            name: "Form Basic",
            icon: "mdi mdi-book",
            component: Basicform,
          },
        ],
      },
      {
        collapse: true,
        name: "Form Pickers",
        cstate: "formpickerPages",
        icon: "mdi mdi-pencil-box-outline",
        subchild: [
          {
            path: "/forms/form-pickers/DateTimePicker",
            name: "Date Pickers",
            icon: "mdi mdi-calendar-clock",
            component: Datepicker,
          },
          {
            path: "/forms/form-pickers/TagSelect",
            name: "Tags & Select",
            icon: "mdi mdi-tag-multiple",
            component: Tagselect,
          },
        ],
      },
      {
        path: "/forms/formvalidation",
        name: "Form Validation",
        icon: "mdi mdi-alert-box",
        component: FormValidate,
      },
      {
        path: "/forms/formsteps",
        name: "Form Steps",
        icon: "mdi mdi-cube-send",
        component: FormSteps,
      },
    ],
  },
  {
    navlabel: true,
    name: "Sample Pages",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: "/pages",
    name: "Pages",
    state: "openApps",
    icon: "mdi mdi-book-open-variant",
    extra: "",
    child: [
      {
        collapse: true,
        name: "Authentication",
        cstate: "openAuthentication",
        icon: "mdi mdi-account-circle",
        subchild: Auths,
      },
      {
        path: "/pages/sample-pages/StarterKit",
        name: "Starter Kit",
        icon: "mdi mdi-crop-free",
        component: Starterkit,
      },
      {
        path: "/pages/sample-pages/Profile",
        name: "Profile",
        icon: "mdi mdi-account-network",
        component: Profile,
      },
      {
        path: "/pages/sample-pages/SearchResult",
        name: "Search Result",
        icon: "mdi mdi-search-web",
        component: Searchresult,
      },
      {
        path: "/pages/sample-pages/Gallery",
        name: "Gallery",
        icon: "mdi mdi-camera-iris",
        component: Gallery,
      },
      {
        path: "/pages/sample-pages/HelperClass",
        name: "Helper Classes",
        icon: "mdi mdi-tune",
        component: Helperclass,
      },
    ],
  },
  {
    navlabel: true,
    name: "Tables",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: "/tables",
    name: "Tables",
    state: "openApps",
    icon: "mdi mdi-border-all",
    extra: "",
    child: [
      {
        path: "/tables/TableBasic",
        name: "Basic Table",
        icon: "mdi mdi-border-all",
        component: Basictable,
      },
      {
        path: "/tables/CustomReactTable",
        name: "React Table",
        icon: "mdi mdi-border-right",
        component: CustomReactTable,
      },
      {
        path: "/tables/DataTable",
        name: "Bootstrap DataTable",
        icon: "mdi mdi-border-inside",
        component: Datatable,
      },
    ],
  },
  {
    navlabel: true,
    name: "Extra",
    icon: "mdi mdi-dots-horizontal",
  },
  {
    collapse: true,
    path: "/extra",
    name: "Extra",
    state: "openApps",
    icon: "mdi mdi-file",
    extra: "",
    child: [
      {
        collapse: true,
        path: "/extra/icons",
        name: "Icons",
        cstate: "iconsPages",
        icon: "mdi mdi-face",
        subchild: [
          {
            path: "/extra/icons/Material",
            name: "Material Icons",
            icon: "mdi mdi-emoticon",
            component: Materialicon,
          },
          {
            path: "/extra/icons/FontAwesome",
            name: "Font Awesome Icons",
            icon: "mdi mdi-emoticon-cool",
            component: FontAwesome,
          },
          {
            path: "/extra/icons/Themify",
            name: "Themify Icons",
            icon: "mdi mdi-chart-bubble",
            component: Themify,
          },
          {
            path: "/extra/icons/Weather",
            name: "Weather Icons",
            icon: "mdi mdi-weather-cloudy",
            component: Weather,
          },
          {
            path: "/extra/icons/SimpleLine",
            name: "Simple Line Icons",
            icon: "mdi mdi mdi-image-broken-variant",
            component: SimpleLine,
          },
          {
            path: "/extra/icons/Flag",
            name: "Flag Icons",
            icon: "mdi mdi-flag-triangle",
            component: FlagIcon,
          },
        ],
      },
      {
        path: "/extra/widget",
        name: "Widgets",
        icon: "mdi mdi-gradient",
        component: Widgets,
      },
      {
        path: "/extra/maps/customvectorMap",
        name: "Vector Map",
        icon: "ti-location-pin",
        component: CustomVectorMap,
      },
      {
        path: "/extra/charts/ChartJs",
        name: "Chartjs",
        icon: "mdi mdi-blur",
        component: Chartjs,
      },
      {
        path: "/extra/charts/C3Chart",
        name: "C3 Chart",
        icon: "mdi mdi-chemical-weapon",
        component: Chartc3,
      },
      {
        path: "/extra/charts/ApexChart",
        name: "Apex Chart",
        icon: "mdi mdi-blackberry",
        component: Apexcharts,
      },
    ],
  },
  {
    path: "/",
    pathTo: "/dashboards/firstdashboard",
    name: "Dashboard",
    redirect: true,
  },
];
export default ThemeRoutes;
