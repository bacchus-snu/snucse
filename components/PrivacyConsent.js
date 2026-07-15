import React from 'react';
import createReactClass from 'create-react-class';

import '../stylesheets/privacy-consent.styl';

const PrivacyConsent = createReactClass({
  render() {
    return (
      <div id="privacy-consent-background">
        <main id="privacy-consent-page">
          <h1 id="privacy-consent-title">SNUCSE</h1>
          <section id="privacy-consent-panel">
            <header id="privacy-consent-header">
              <h2>개인정보 수집, 이용 및 처리 동의</h2>
              <p>
                서울대학교 컴퓨터공학부는 「개인정보 보호법」 제15조제1항제1호에 의거하여 학부 홈페이지 가입 및 이용을 위해 아래와 같이 개인정보 수집, 이용 및 처리를 하고자 합니다. 내용을 자세히 읽으신 후 동의 여부를 결정하여 주십시오.
              </p>
            </header>

            <div className="privacy-consent-body">
              <h3>수집, 이용 및 처리 내역</h3>
              <table className="privacy-consent-table">
                <thead>
                  <tr>
                    <th>항목</th>
                    <th>수집 및 이용 목적</th>
                    <th>보유기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>아이디, 이름, 생년월일, 학번, 휴대전화/연락처, 이메일</td>
                    <td>
                      <p>- 회원가입 및 관리</p>
                      <p>- 서비스 제공(시설 예약, 공지사항 등 기타 정보 안내)</p>
                    </td>
                    <td>회원 탈퇴 시까지</td>
                  </tr>
                </tbody>
              </table>

              <p className="privacy-consent-note">
                ※ 회원 탈퇴 시에는 개인정보를 즉시 파기합니다. 다만, 학칙이나 기타 법률에 의해 이용자의 개인정보를 보존해야할 필요가 있는 경우에는 해당 법률의 규정에 따릅니다.
              </p>
              <dl className="privacy-consent-summary">
                <dt>보유근거</dt>
                <dd>회원관리</dd>
                <dt>보유기간</dt>
                <dd>2년</dd>
              </dl>
              <p className="privacy-consent-note">
                ※ 위의 개인정보 수집, 이용 및 처리에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부할 경우 원활한 행정처리를 할 수 없어 가입 및 이용에 제한을 받을 수 있습니다.
              </p>
            </div>
          </section>
          <nav id="privacy-consent-actions">
            <a href="/sign-up">가입 화면으로 돌아가기</a>
          </nav>
        </main>
      </div>
    );
  }
});

export default PrivacyConsent;
