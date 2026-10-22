// Map, Set과 String.prototype.includes 등을 사용할 수 있게 함
import 'core-js/stable';

import {createRoot} from 'react-dom/client';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import './stylesheets/reset.css';
import './stylesheets/common.styl';

import {
  Menu,
  Others,
  Message,
  ProfileList,
  ProfileMake,
  ProfileAdmin,
  ProfileAdminTransfer,
  Main,
  Activity,
  TagInfo,
  ArticleWrite,
  ArticleEdit,
  SearchResult,
  ClassManager,
  Login,
  SignUp,
  PrivacyConsent,
  Settings,
  TimeManager
} from './components';

import reducers from './reducers';

const rootElement = document.getElementById('content');
const store = createStore(combineReducers(reducers));

function MenuLayout() {
  return (
    <Menu>
      <Outlet/>
    </Menu>
  );
}

createRoot(rootElement).render(
  <Provider store={store}>
    <TimeManager>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/privacy-consent" element={<PrivacyConsent/>}/>
          <Route element={<MenuLayout/>}>
            <Route path="/" element={<Main/>}/>
            <Route path="/message" element={<Message/>}/>
            <Route path="/others" element={<Others/>}/>
            <Route path="/profiles" element={<ProfileList/>}/>
            <Route path="/profiles/new" element={<ProfileMake/>}/>
            <Route path="/profiles/:id/admin" element={<ProfileAdmin/>}/>
            <Route path="/profiles/:id/transfer_admin" element={<ProfileAdminTransfer/>}/>
            <Route path="/profiles/:id/write" element={<ArticleWrite/>}/>
            <Route path="/search" element={<SearchResult/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/tags" element={<TagInfo/>}/>
            <Route path="/activities" element={<Activity/>}/>
            <Route path="/:articleId/edit" element={<ArticleEdit/>}/>
            <Route path="/:id" element={<ClassManager/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </BrowserRouter>
    </TimeManager>
  </Provider>
);
