import React from "react";

// import { Container } from './styles';

const Brand: React.FC = () => {
  return (
    <>
      <a href="/" className="h-25px logo">
        <svg
          width="85"
          height="29"
          viewBox="0 0 85 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.2164 22.4618C49.0354 22.4618 48.0757 22.2404 47.3375 21.7975C46.5994 21.3335 46.0615 20.6902 45.7241 19.8676C45.3866 19.024 45.2179 18.0327 45.2179 16.8938V8.54182V8.352C45.2179 8.352 45.2179 8.0251 45.2179 7.81419V6.73855C45.2179 6.52764 45.2179 6.23236 45.2179 6.23236V6.01091V0.727636C45.2179 0.516728 45.2812 0.348001 45.4077 0.221455C45.5554 0.0738185 45.7346 0 45.9455 0H47.4324C47.6434 0 47.8121 0.0738185 47.9386 0.221455C48.0863 0.348001 48.1601 0.516728 48.1601 0.727636V6.01091V6.14576V6.23236C48.1601 6.23236 48.1601 6.52764 48.1601 6.73855V7.45561C48.1601 7.66652 48.1601 7.99766 48.1601 7.99766V8.20886V8.54182V16.6724C48.1601 17.6636 48.3288 18.444 48.6663 19.0135C49.0037 19.5829 49.6048 19.8676 50.4695 19.8676H52.3994C52.6103 19.8676 52.779 19.9415 52.9055 20.0891C53.0532 20.2156 53.127 20.3844 53.127 20.5953V21.7342C53.127 21.9451 53.0532 22.1244 52.9055 22.272C52.779 22.3985 52.6103 22.4618 52.3994 22.4618H50.2164Z"
            fill="white"
          />
          <path
            d="M60.9698 22.3563C59.3669 22.3563 58.0276 22.0505 56.952 21.4389C55.8763 20.8273 55.0538 19.9836 54.4843 18.908C53.9149 17.8113 53.5985 16.5669 53.5352 15.1749C53.5141 14.8163 53.5036 14.3629 53.5036 13.8145C53.5036 13.2451 53.5141 12.7916 53.5352 12.4542C53.5985 11.0411 53.9149 9.79671 54.4843 8.72107C55.0749 7.64543 55.908 6.8018 56.9836 6.19016C58.0592 5.57852 59.388 5.27271 60.9698 5.27271C62.5516 5.27271 63.8803 5.57852 64.956 6.19016C66.0316 6.8018 66.8541 7.64543 67.4236 8.72107C68.0141 9.79671 68.3411 11.0411 68.4043 12.4542C68.4254 12.7916 68.436 13.2451 68.436 13.8145C68.436 14.3629 68.4254 14.8163 68.4043 15.1749C68.3411 16.5669 68.0247 17.8113 67.4552 18.908C66.8858 19.9836 66.0632 20.8273 64.9876 21.4389C63.912 22.0505 62.5727 22.3563 60.9698 22.3563ZM60.9698 19.9203C62.2774 19.9203 63.3214 19.5091 64.1018 18.6865C64.8821 17.8429 65.304 16.6196 65.3672 15.0167C65.3883 14.7003 65.3989 14.2996 65.3989 13.8145C65.3989 13.3294 65.3883 12.9287 65.3672 12.6123C65.304 11.0094 64.8821 9.79671 64.1018 8.97416C63.3214 8.13052 62.2774 7.70871 60.9698 7.70871C59.6621 7.70871 58.6076 8.13052 57.8061 8.97416C57.0258 9.79671 56.6145 11.0094 56.5723 12.6123C56.5512 12.9287 56.5407 13.3294 56.5407 13.8145C56.5407 14.2996 56.5512 14.7003 56.5723 15.0167C56.6145 16.6196 57.0258 17.8429 57.8061 18.6865C58.6076 19.5091 59.6621 19.9203 60.9698 19.9203Z"
            fill="white"
          />
          <path
            d="M77.557 29C76.1228 29 74.9417 28.8102 74.0137 28.4305C73.1068 28.0509 72.3897 27.5869 71.8625 27.0385C71.3563 26.5113 70.9872 25.9734 70.7552 25.4251C70.5443 24.8978 70.4283 24.476 70.4072 24.1596C70.3861 23.9487 70.4494 23.7694 70.597 23.6218C70.7657 23.4742 70.945 23.4003 71.1348 23.4003H72.6534C72.8432 23.4003 73.0014 23.4425 73.1279 23.5269C73.2545 23.6113 73.3599 23.7905 73.4443 24.0647C73.5708 24.3811 73.7606 24.7291 74.0137 25.1087C74.2668 25.5094 74.657 25.8469 75.1843 26.1211C75.7116 26.4163 76.4497 26.564 77.3988 26.564C78.3901 26.564 79.2232 26.4269 79.8981 26.1527C80.573 25.8996 81.0792 25.4356 81.4167 24.7607C81.7752 24.1069 81.9545 23.2 81.9545 22.04V19.8887C81.4483 20.5425 80.7839 21.0909 79.9614 21.5338C79.1388 21.9556 78.1054 22.1665 76.861 22.1665C75.6799 22.1665 74.6676 21.9662 73.8239 21.5654C72.9803 21.1436 72.2843 20.5847 71.7359 19.8887C71.2087 19.1716 70.8079 18.3596 70.5337 17.4527C70.2807 16.5458 70.133 15.5967 70.0908 14.6054C70.0697 14.0149 70.0697 13.4349 70.0908 12.8654C70.133 11.8742 70.2807 10.9251 70.5337 10.0182C70.8079 9.11125 71.2087 8.29925 71.7359 7.58216C72.2843 6.86507 72.9803 6.30616 73.8239 5.90543C74.6676 5.48361 75.6799 5.27271 76.861 5.27271C78.1265 5.27271 79.1705 5.51525 79.993 6.00034C80.8367 6.46434 81.5221 7.0338 82.0494 7.70871V6.34834C82.0494 6.13743 82.1127 5.95816 82.2392 5.81052C82.3868 5.66289 82.5661 5.58907 82.777 5.58907H84.2323C84.4432 5.58907 84.6225 5.66289 84.7701 5.81052C84.9177 5.95816 84.9916 6.13743 84.9916 6.34834V21.692C84.9916 23.1051 84.749 24.36 84.2639 25.4567C83.7999 26.5534 83.0196 27.4182 81.9228 28.0509C80.8472 28.6836 79.3919 29 77.557 29ZM77.4937 19.6356C78.5483 19.6356 79.3919 19.3931 80.0247 18.908C80.6785 18.4229 81.153 17.8113 81.4483 17.0731C81.7647 16.3349 81.9334 15.5862 81.9545 14.8269C81.9756 14.5316 81.9861 14.1731 81.9861 13.7512C81.9861 13.3083 81.9756 12.9393 81.9545 12.644C81.9334 11.8847 81.7647 11.136 81.4483 10.3978C81.153 9.65961 80.6785 9.04798 80.0247 8.56289C79.3919 8.0778 78.5483 7.83525 77.4937 7.83525C76.4392 7.83525 75.5956 8.0778 74.9628 8.56289C74.3301 9.02689 73.8767 9.64907 73.6025 10.4294C73.3283 11.1887 73.1701 12.0113 73.1279 12.8971C73.1068 13.4454 73.1068 14.0043 73.1279 14.5738C73.1701 15.4596 73.3283 16.2927 73.6025 17.0731C73.8767 17.8323 74.3301 18.4545 74.9628 18.9396C75.5956 19.4036 76.4392 19.6356 77.4937 19.6356Z"
            fill="white"
          />
          <path
            d="M35.3366 22.1605C34.3242 22.1605 33.3856 21.9496 32.5209 21.5278C31.6773 21.106 30.9918 20.5471 30.4646 19.8511C29.9373 19.134 29.6736 18.3325 29.6736 17.4467C29.6736 16.0125 30.2536 14.8631 31.4136 13.9984C32.5736 13.1336 34.0816 12.5747 35.9376 12.3216L40.9362 11.6256V10.5184C40.9362 9.40054 40.5882 8.52527 39.8922 7.89254C39.2173 7.23872 38.1311 6.91181 36.6336 6.91181C35.5369 6.91181 34.6511 7.13327 33.9762 7.57618C33.3013 7.998 32.8373 8.5569 32.5842 9.2529C32.4787 9.56927 32.2784 9.72745 31.9831 9.72745H31.4769C31.2238 9.72745 31.0446 9.66418 30.9391 9.53763C30.8336 9.39 30.7809 9.22127 30.7809 9.03145C30.7809 8.73618 30.8864 8.36709 31.0973 7.92418C31.3293 7.48127 31.6773 7.0489 32.1413 6.62709C32.6053 6.18418 33.2064 5.81509 33.9446 5.51981C34.6827 5.22454 35.5791 5.0769 36.6336 5.0769C37.878 5.0769 38.9009 5.24563 39.7024 5.58309C40.5249 5.92054 41.1576 6.36345 41.6006 6.91181C42.0646 7.43909 42.3915 8.02963 42.5813 8.68345C42.7711 9.33727 42.866 9.98054 42.866 10.6133V21.1482C42.866 21.3591 42.8027 21.5278 42.6762 21.6544C42.5496 21.7809 42.3809 21.8442 42.17 21.8442H41.6322C41.4213 21.8442 41.2526 21.7809 41.126 21.6544C40.9995 21.5278 40.9362 21.3591 40.9362 21.1482V19.6613C40.6831 20.0409 40.3246 20.4205 39.8606 20.8002C39.3966 21.1798 38.7955 21.5067 38.0573 21.7809C37.3402 22.034 36.4333 22.1605 35.3366 22.1605ZM35.6529 20.3256C36.6231 20.3256 37.5089 20.1147 38.3104 19.6929C39.1118 19.2711 39.7446 18.6278 40.2086 17.7631C40.6936 16.8773 40.9362 15.77 40.9362 14.4413V13.3656L36.8551 13.9351C35.1256 14.1671 33.818 14.5678 32.9322 15.1373C32.0464 15.7067 31.6035 16.4238 31.6035 17.2885C31.6035 17.9845 31.8038 18.554 32.2046 18.9969C32.6053 19.4398 33.1115 19.7773 33.7231 20.0093C34.3558 20.2202 34.9991 20.3256 35.6529 20.3256Z"
            fill="#219EBC"
          />
          <path
            d="M21.2496 22.1605C19.2037 22.1605 17.5797 21.4962 16.3776 20.1674C15.1754 18.8176 14.4899 17.0565 14.3212 14.8842C14.3001 14.5678 14.2896 14.146 14.2896 13.6187C14.2896 13.0914 14.3001 12.6696 14.3212 12.3533C14.4266 10.9191 14.7641 9.65363 15.3336 8.5569C15.903 7.46018 16.6834 6.60599 17.6746 5.99436C18.687 5.38272 19.8786 5.0769 21.2496 5.0769C22.7259 5.0769 23.9808 5.40381 25.0143 6.05763C26.0477 6.71145 26.8386 7.65 27.387 8.87327C27.9565 10.0965 28.2412 11.5518 28.2412 13.2391V13.7136C28.2412 13.9245 28.1674 14.0933 28.0197 14.2198C27.8932 14.3464 27.7245 14.4096 27.5136 14.4096H16.251C16.251 14.4096 16.251 14.4518 16.251 14.5362C16.251 14.6205 16.251 14.6838 16.251 14.726C16.2932 15.6751 16.5146 16.582 16.9154 17.4467C17.3161 18.2904 17.8856 18.9864 18.6237 19.5347C19.3619 20.062 20.2372 20.3256 21.2496 20.3256C22.1565 20.3256 22.9052 20.1885 23.4957 19.9144C24.1074 19.6402 24.5925 19.3449 24.951 19.0285C25.3096 18.6911 25.5416 18.438 25.647 18.2693C25.8368 17.9951 25.9845 17.8369 26.0899 17.7947C26.1954 17.7314 26.3641 17.6998 26.5961 17.6998H27.1023C27.2921 17.6998 27.4503 17.7631 27.5768 17.8896C27.7245 17.9951 27.7877 18.1427 27.7666 18.3325C27.7456 18.6278 27.5768 18.9969 27.2605 19.4398C26.9652 19.8616 26.5328 20.2834 25.9634 20.7053C25.415 21.1271 24.7401 21.4751 23.9386 21.7493C23.1372 22.0234 22.2408 22.1605 21.2496 22.1605ZM16.251 12.638H26.3114V12.5115C26.3114 11.4569 26.111 10.5078 25.7103 9.66418C25.3096 8.82054 24.7296 8.15618 23.9703 7.67109C23.211 7.1649 22.3041 6.91181 21.2496 6.91181C20.195 6.91181 19.2881 7.1649 18.5288 7.67109C17.7906 8.15618 17.2212 8.82054 16.8205 9.66418C16.4408 10.5078 16.251 11.4569 16.251 12.5115V12.638Z"
            fill="#219EBC"
          />
          <path
            d="M6.29915 22.1605C5.20242 22.1605 4.25333 22.0129 3.45188 21.7176C2.67152 21.4224 2.02824 21.0744 1.52206 20.6736C1.01588 20.2518 0.636242 19.8405 0.383152 19.4398C0.151151 19.0391 0.024606 18.7333 0.00351514 18.5224C-0.0175757 18.2904 0.0562424 18.1216 0.22497 18.0162C0.393697 17.8896 0.551879 17.8264 0.699515 17.8264H1.17406C1.30061 17.8264 1.40606 17.8475 1.49042 17.8896C1.59588 17.9318 1.72242 18.0478 1.87006 18.2376C2.14424 18.5962 2.46061 18.9442 2.81915 19.2816C3.1777 19.598 3.63115 19.8511 4.17952 20.0409C4.74897 20.2307 5.45552 20.3256 6.29915 20.3256C7.56461 20.3256 8.60861 20.0831 9.43115 19.598C10.2537 19.1129 10.665 18.3958 10.665 17.4467C10.665 16.8562 10.4962 16.3816 10.1588 16.0231C9.84242 15.6645 9.29406 15.3482 8.5137 15.074C7.73333 14.7998 6.67879 14.5151 5.35006 14.2198C4.02133 13.9034 2.99842 13.5238 2.28133 13.0809C1.58533 12.638 1.11079 12.1318 0.857697 11.5624C0.604606 10.9718 0.478061 10.3391 0.478061 9.66418C0.478061 8.926 0.68897 8.2089 1.11079 7.5129C1.53261 6.79581 2.15479 6.21581 2.97733 5.7729C3.82097 5.3089 4.87552 5.0769 6.14097 5.0769C7.17442 5.0769 8.0497 5.214 8.76679 5.48818C9.50497 5.76236 10.1061 6.09981 10.5701 6.50054C11.0341 6.88018 11.3715 7.25981 11.5824 7.63945C11.8144 8.01909 11.941 8.3249 11.9621 8.5569C11.9832 8.76781 11.9199 8.93654 11.7722 9.06309C11.6246 9.18963 11.4559 9.2529 11.2661 9.2529H10.7915C10.6228 9.2529 10.4857 9.22127 10.3802 9.158C10.2748 9.07363 10.1799 8.96818 10.0955 8.84163C9.88461 8.50418 9.63151 8.18781 9.33624 7.89254C9.04097 7.59727 8.64024 7.36527 8.13406 7.19654C7.64897 7.00672 6.98461 6.91181 6.14097 6.91181C4.87552 6.91181 3.93697 7.17545 3.32533 7.70272C2.7137 8.2089 2.40788 8.86272 2.40788 9.66418C2.40788 10.1282 2.53442 10.5395 2.78752 10.898C3.04061 11.2355 3.51515 11.5518 4.21115 11.8471C4.90715 12.1213 5.91952 12.4165 7.24824 12.7329C8.59806 13.0282 9.66315 13.3973 10.4435 13.8402C11.2239 14.262 11.7722 14.7682 12.0886 15.3587C12.4261 15.9493 12.5948 16.6453 12.5948 17.4467C12.5948 18.2904 12.3522 19.0707 11.8672 19.7878C11.4032 20.5049 10.6966 21.0849 9.74752 21.5278C8.81952 21.9496 7.67006 22.1605 6.29915 22.1605Z"
            fill="#219EBC"
          />
        </svg>
      </a>
    </>
  );
};

export default Brand;
