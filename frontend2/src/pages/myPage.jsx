import NFTCard from "../components/NftCard";

const MyPage = () => {
  return (
    <div className="px-32 min-h-screen">
      <div className=" bg-red-400 flex  h-96 items-center">
        <img
          className=" w-60 h-60 bg-gray-50 rounded-full text-center my-20 mx-20"
          alt="프로필 이미지"
          src="../../public/images/profile.png"
        />
        <div className=" flex flex-col h-60 w-2/3 justify-between items-center">
          <h3 className="bg-gray-50 flex justify-between h-72 px-20 py-12">
            !!!! 선물 상세 정보 게시!!!! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni quisquam aliquid quis vero exercitationem
            eos, veritatis, nesciunt non dolor facere soluta, incidunt voluptate
            aut ratione voluptas ad quidem quam aspernatur.
          </h3>
        </div>
      </div>
      <section className="bg-yellow-100 flex py-12 px-12">
        <button className="bg-green-100 px-4 py-2 rounded-xl mr-12">
          내 선물 목록
        </button>
        <button className="bg-green-100 px-4 py-2 rounded-xl">친구 목록</button>
      </section>

      {/* 선물 추가하기 버튼이랑 선물목록 아이템박스로 만들기 */}
      <section className="bg-purple-200 grid grid-cols-4 mx-auto">
        <div className="bg-gray-100 w-96 h-96 flex justify-center items-center">
          <button className="bg-blue-300 w-52 h-52 rounded-full text-8xl flex justify-center items-center">
            +
          </button>
        </div>
        <NFTCard />
        <NFTCard />
        <NFTCard />
      </section>

      {/* 친구관리 부분 어떻게 하지... 좀 더 생각해보장..!!!! */}
      <section className="bg-blue-100">
        <div>친구 리스트</div>
      </section>
    </div>
  );
};

export default MyPage;
