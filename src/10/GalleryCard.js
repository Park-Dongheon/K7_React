
export default function GalleryCard({imgUrl, title, content, spTag}) {
  const spTags = (spTag.includes(',') ? spTag.split(',') : [...spTag])      // spTags는 배열이됨
                      .map(item => <span className="inline-block bg-emerald-200 rounded-full 
                                                      px-3 py-1 text-sm font-semibold text-emerald-700 mr-2 mb-2"
                                           key={item} >{item}</span>);
  console.log('spTags: ',spTags)

  return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
 
            <img className="w-full" 
                //  src={imgUrl.replace('http://','https://')} 
                 src={imgUrl.includes('http:') ? imgUrl.replace('http:','https:') : imgUrl}
                 alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-emerald-700 text-base">
                        {content}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {spTags}
                </div>

        </div>
    </div>
  )
}
