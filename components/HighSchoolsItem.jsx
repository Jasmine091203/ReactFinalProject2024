import { Link } from 'react-router-dom';
const HighSchoolsItem = ({ result }) => {

    return (
        <div>
            <h1>{result.objectid}學校詳細資料</h1>
            <p>學校名稱：{result.name}</p>
            <p>屬於哪種性質的學校：{result.naics_desc}</p>
            <p>地址：{result.address}</p>
            <p>連絡電話：{result.telephone}</p>
            <p>學校網站：<a href={result.website}>{result.website}</a></p>
            <hr />
            <Link to='..' relative='path'>上一頁</Link>
        </div>
    );
}
export default HighSchoolsItem;