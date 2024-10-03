import { Link } from 'react-router-dom';
const UniversityItem = ({ result }) => {
    console.log(result);
    return (
        <div>
            <h1>{result.objectid}大學詳細資料</h1>
            <p>大學名稱：{result.name}</p>
            <p>類別：{result.naics_desc}</p>
            <p>連絡電話：{result.telephone}</p>
            <p>地址：{result.address}</p>
            <p>學校網站：<a href={result.website}>{result.website}</a></p>
            <hr />
            <Link to='..' relative='path'>上一頁</Link>
        </div>
        
    );
};
export default UniversityItem;