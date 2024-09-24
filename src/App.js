import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import Admin from './components/AdminPanel';
import Users from './components/Users';
import Admins from './components/Admins';
import StudentLogin from './components/StudentLogin';
import TeacherLogin from './components/TeacherLogin';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
      <Route path="/play/quizSummary" exact component={QuizSummary} />
      <Route path="/adminPanel" exact component={Admin} />
      <Route path="/users" exact component={Users} />
      <Route path="/admins" exact component={Admins} />
      <Route path="/studentLogin" exact component={StudentLogin} />
      <Route path="/teacherLogin" exact component={TeacherLogin} />
    </Router>
  );
}

export default App;