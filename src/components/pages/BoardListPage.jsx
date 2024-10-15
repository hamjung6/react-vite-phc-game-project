import React, { useEffect, useState } from "react";
import boardService from "../../services/BoardService";

const BoardListPage = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    console.log("use Effective 실행");
    initBoards();
  }, []);

  const initBoards = () => {
    boardService.getPagingList().then((response) => {
      console.log(response);
    });
  };

  return <div>게시판 실행</div>;
};

export default BoardListPage;
