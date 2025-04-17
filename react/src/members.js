// import 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.3/themes/base/jquery-ui.min.css';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
// import 'https://cdn.datatables.net/2.0.8/css/dataTables.bootstrap5.min.css';
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
// import 'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css';
import './style/style.css';
import './style/member.css';
import './style/btn.css';
import { useState } from 'react';

function App() {
    return (
        <body class="login-page" style={{minHeight: "496.781px"}}>
            <div class="login-logo">
                <a href="/"><img src='' style={{height: "60px", padding: "0.5rem"}}/></a>

            </div>
            <div class="login-box">
                <div class="card" style={{boxShadow: "none"}}>
                    <div class="card-body login-card-body">
                        <form action="/session_login" method="post">
                            <div class="input-group mb-3">
                                <input type="email" id="uid" name="uid" class="form-control" placeholder="아이디" pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
                                required oninvalid="this.setCustomValidity('아이디를 확인하세요.')" oninput="this.setCustomValidity('')"/>
                                <div class="input-group-append">
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <input type="password" id="upw" name="upw" class="form-control" placeholder="비밀번호" title="영숫자 조합으로&#13;6에서 15자리까지만 입력가능합니다." 
                                required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$" oninvalid="this.setCustomValidity('비밀번호를 확인하세요.')" oninput="this.setCustomValidity('')"/>
                            </div>
                            <div class="mb-3">
                                <input type="checkbox" id="cookie" name="cookie"/>
                                <label for="cookie" style={{fontWeight: "450"}}>아이디 저장</label>
                            </div>
                    
                            <div class="mb-3" style={{marginTop: "25px"}}>
                                <button type="submit" class="btn btn-purple btn-block">로그인</button>
                            </div>
                        </form>
                        <div class="mb-3" style={{fontSize: "11px"}}>

                            <ul style={{float: "right", listStyleType: "none"}}>
                                <li style={{float: "left"}}>
                                    <a href="/register" class="text-center">회원가입</a>
                                </li>
                                <li style={{float: "left"}}>
                                    <a href="/forgot_pw" class="text-center">비밀번호 분실</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default App;