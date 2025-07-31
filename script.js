// Variable to store the current language setting
let currentLang = 'ja';

// Object containing all text content for both Japanese and English
const translations = {
    ja: {
        pageTitle: "THE BRISBANE GAME ― 休学ワーホリ、初海外、仲間と駆け抜けた365日",
        langToggle: "English",
        headerSubtitle: "― 休学ワーホリ、初海外、仲間と駆け抜けた365日 ―",
        aboutTitle: "これは、Takuの物語。",
        aboutSubtitle: "大学院を休学し、オーストラリアへ。そこでは、想像もしなかった出会いと挑戦が待っていました。これは、孤独なスタートから始まり、多くの仲間と共に「居場所」を作り上げ、自分だけの地図を描いた一年間の記録です。",
        introTitle: "これは、Takuの物語。",
        introBody: "大学院を休学し、オーストラリアへ。そこでは、想像もしなかった出会いと挑戦が待っていました。これは、孤独なスタートから始まり、多くの仲間と共に「居場所」を作り上げ、自分だけの地図を描いた一年間の記録です。",
        epilogueTitle: "感謝を込めて",
        epilogueH1: "community_brisbaneの仲間たちへ",
        epilogueP1: "一緒についてきてくれた仲間がいたから、ここまでこれた。",
        epilogueH2: "1stワーホリで出会った、すべての友達へ",
        epilogueP2: "このゲームの「365日」を創ってくれてありがとう。",
        bonusTitle: "番外編",
        bonusH1: "community_brisbane 運営の裏側",
        skillsTitle: "CLEAR REWARD",
        skillsSubtitle: "このゲームを通して、Takuは多くのスキルを手に入れた。",
        modalClose: "閉じる",
        storyData: [
            { chapter: "序章：冒険の始まり (2024年5月〜7月)", title: "2024年5月、大学院を休学", icon: "🎓", summary: "「このままじゃダメだ」― 敷かれたレールを外れる決意をした日。", details: "自分の人生を見つめなおし、「このままでは後悔する」という強い思いが込み上げてきました。周りの期待や安定した未来よりも、自分が本当に心惹かれる道を選びたい。そう決意し、休学届を提出。ここから、誰にも縛られない、自分だけの物語を描くための365日が始まりました。", image: "https://placehold.co/600x400/0B69A3/white?text=決意の日" },
            { chapter: "序章：冒険の始まり (2024年5月〜7月)", title: "最初の挑戦、セブ島へ", icon: "✈️", summary: "オーストラリアへの助走期間。英語と、海外で生きるということに初めて触れた日々。", details: "いきなりオーストラリアへ飛び込むのは不安だったので、まずはフィリピン・セブ島で3ヶ月の語学留学をすることに。ここで初めて海外で生活し、多様な文化に触れ、英語でコミュニケーションをとる楽しさと難しさを学びました。この経験が、後のブリスベンでの生活の大きな土台となります。", image: "https://placehold.co/600x400/1E88E5/white?text=セブ島での学び" },
            { chapter: "第1章：ブリスベン、孤独とサバイバル (2024年8月)", title: "片道航空券と、セブ島で得た小さな自信", icon: "🎫", summary: "オーストラリアへ。人生の本当の冒険が、ついに幕を開ける。", details: "セブ島での経験で少しだけ自信をつけ、片道航空券を握りしめてブリスベンへ。しかし、空港に降り立った瞬間、本当の挑戦はここからだと実感しました。期待と不安が入り混じる中、僕のゲームが本格的にスタートしました。", image: "https://placehold.co/600x400/299DBC/white?text=ブリスベン到着" },
            { chapter: "第1章：ブリスベン、孤独とサバイバル (2024年8月)", title: "最初の試練：生活インフラを整えよ！", icon: "🏠", summary: "家なし、仕事なし、友達なし。毎日がクエストだった、サバイバル生活のリアル。", details: "最初の1週間は本当に過酷でした。住む家を探し、銀行口座を開設し、携帯電話を契約する。一つ一つのタスクが大きな壁のように感じられました。言葉の壁にもぶつかりながら、必死で生活の基盤を築いていきました。", image: "https://placehold.co/600x400/3F51B5/white?text=サバイバル生活" },
            { chapter: "第1章：ブリスベン、孤独とサバイバル (2024年8月)", title: "「友達の作り方、教えてください！」", icon: "🗣️", summary: "孤独に耐えきれず、なにかしたい。それが、すべての始まりだった。", details: "生活は安定してきたものの、独りの日々は想像以上に辛いものでした。このままではいけない。どうすれば友達ができるんだろう？その純粋な問いと行動したいという衝動が、後のコミュニティ設立へと繋がる最初のきっかけでした。", image: "https://placehold.co/600x400/5C6BC0/white?text=孤独と向き合う" },
            { chapter: "第2章：僕らの\"居場所\"ができた日 (2024年8月25日〜10月)", title: "8月25日、community_brisbane爆誕", icon: "🎉", summary: "「ないなら、作ればいい」― 友達づくりの「機会」を創るという、人生で一番面白いゲームの始まり。", details: "待っていても何も変わらない。それなら、自分が人々が集まれる「機会」や「場所」を作ればいいんだ。最初は数人しか集まらなかったけれど、これが僕らのコミュニティの始まりでした。", image: "https://placehold.co/600x400/F47C20/white?text=コミュニティ爆誕" },
            { chapter: "第2章：僕らの\"居場所\"ができた日 (2024年8月25日〜10月)", title: "最初の仲間と、最初の壁：存続の危機", icon: "🧱", summary: "ルームメイトたちが手伝ってくれたが、彼らが去り、運営の危機。", details: "当初はルームメイトたちが運営を手伝ってくれましたが、彼らもそれぞれブリスベンを離れていきました。気づけば運営は僕一人に。「もっとやりたかった」という去った仲間の言葉を背負いながらたった一人でコミュニティを続けることに。", image: "https://placehold.co/600x400/78909C/white?text=存続の危機" },
            { chapter: "第2章：僕らの\"居場所\"ができた日 (2024年8月25日〜10月)", title: "10月17日、方向転換のおにぎりイベント", icon: "🍙", summary: "おにぎりイベントで、新たな協力者と出会う。", details: "このままではダメだ。何か新しい流れを作らなければ。そう考えて企画したのが、日本文化の象徴でもある「おにぎり」をみんなで作るイベントでした。このイベントが大当たりし、多くの人が集まってくれただけでなく、運営に協力してくれる新しい仲間との出会いにも繋がりました。", image: "https://placehold.co/600x400/4CAF50/white?text=おにぎりイベント" },
            { chapter: "第2章：僕らの\"居場所\"ができた日 (2024年8月25日〜10月)", title: "多角化への挑戦と挫折：「本気でやる」という意味", icon: "🧭", summary: "別プロジェクトの失敗が、「本気」の意味を教えてくれた。", details: "コミュニティ運営の傍ら、英会話、自転車レンタル、ワーホリ支援などにも着手してました。しかし、どれも失敗。この経験から、一つのことに「本気で」集中することの重要性を痛感しました。僕が本当にやるべきことは、コミュニティを育てることだと気づかされたのです。", image: "https://placehold.co/600x400/FFC107/white?text=挑戦と挫折" },
            { chapter: "第2章：僕らの\"居場所\"ができた日 (2024年8月25日〜10月)", title: "時給30ドルがくれた「心の余白」", icon: "💰", summary: "10月末までに、1.5ヶ月で$6000の貯金。お金の自由が、僕に行動する勇気と時間を与えてくれた。", details: "経済的な安定は、精神的な安定に直結します。お金の心配がなくなったことで、コミュニティ活動にさらに情熱を注ぐことができる「心の余白」が生まれました。", image: "https://placehold.co/600x400/8BC34A/white?text=経済的自立" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "11月2日、相棒との出会い", icon: "🤝", summary: "この仲間と何かを成し遂げたいという、新しい夢ができた。", details: "運営に悩んでいた時期に、僕の情熱に共感し、「一緒にやりたい」と言ってくれる最高の相棒に出会いました。彼との出会いがコミュニティをさらに加速させ、一人では見えなかった景色を見せてくれました。この仲間となら、もっと大きなことができる。そう確信しました。", image: "https://placehold.co/600x400/673AB7/white?text=最高の相棒" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "出会いと別れが教えてくれたこと", icon: "👣", summary: "仲間たちとの日々が、僕の価値観を広げ、人生の選択肢を教えてくれた。", details: "ワーホリでは、毎日のように新しい出会いがあり、そして同じだけ別れがあります。一期一会の関係の中で、人と比べずに自分らしくいること、限られた時間を大切にすることを学びました。国籍や文化を超えた友情は、僕の世界を何倍にも広げてくれました。", image: "https://placehold.co/600x400/9C27B0/white?text=出会いと別れ" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "コミュニティの熱狂：クリスマス会と忘年会BBQ", icon: "🎄", summary: "仲間たちと作り上げた熱狂の渦。僕らの物語は、これからもっと面白くなる。", details: "相棒や運営メンバーと共に企画したクリスマス会には50人以上が集まり、大成功を収めました。年末のBBQも大盛況。コミュニティが確かに人々の「居場所」になっていることを実感し、感動で胸が熱くなりました。この熱狂は、僕らの努力が形になった証でした。", image: "https://placehold.co/600x400/E91E63/white?text=熱狂のイベント" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "年末の決断：もう一年、ここにいる", icon: "🗓️", summary: "仲間と見つけた目標を前に、休学をもう一年延長することを決めた日。", details: "当初の計画では、1年で日本に帰国する予定でした。しかし、このコミュニティと仲間たちとの未来を考えると、どうしても離れがたい。悩んだ末に、大学や家族に連絡し、もう1年休学を延長させてもらうことに。自分の気持ちに正直に、大きな決断を下しました。", image: "https://placehold.co/600x400/F44336/white?text=大きな決断" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "誕生日に気づいた、仲間の大切さ", icon: "🎂", summary: "僕のために集まり、祝ってくれる仲間たち。彼らがいるから、今の僕がいる。", details: "自分の誕生日に、仲間たちがサプライズでパーティーを開いてくれました。異国の地で、こんなにも温かい祝福を受けるなんて。孤独だった渡航初日が嘘のようでした。このコミュニティを作って本当に良かったと、心から思えた一日でした。", image: "https://placehold.co/600x400/FF9800/white?text=最高の誕生日" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "2月15日、日本食マートとの縁日コラボ", icon: "🏮", summary: "地元の日本食マートを巻き込んだ、過去最大規模のイベント。", details: "僕らの活動が地域にも認められ、地元の日本食料品店とのコラボイベントが実現。企画から運営の主導までを相棒が見事にやり遂げました。彼の成長した姿を見られたことは、僕自身の喜びでもありました。コミュニティが外部と連携し、新たな価値を生んだ記念すべき日です。", image: "https://placehold.co/600x400/D32F2F/white?text=縁日コラボ" },
            { chapter: "第4章：ロードトリップ (2025年4月〜6月)", title: "僕がcommunity_brisbaneでしてきたこと", icon: "📜", summary: "僕が作ったこの場所は、たくさんの人の笑顔と「ありがとう」で溢れていた。", details: "旅立ちを前に、これまでの活動を振り返りました。毎週のイベント、SNSでの発信、数えきれないほどの出会い。僕が始めた小さな一歩が、多くの人のブリスベンでの生活を彩る一部になれたこと。その事実に、大きな達成感と感謝の気持ちが込み上げてきました。", image: "https://placehold.co/600x400/607D8B/white?text=これまでの軌跡" },
            { chapter: "第4章：ロードトリップ (2025年4月〜6月)", title: "4月、旅立ちの決意とお別れ会", icon: "👋", summary: "守りたい場所があることに気づかされた瞬間。そして迎えたお別れ会。", details: "帰国最後のロードトリップのため、ブリスベンを離れることを決意。すると仲間から「コミュニティがなくなるのは寂しい」という声が。僕が作った場所が、僕がいなくても求められている。その事実に感動し、この場所を守り続けたいと強く思いました。お別れ会は、再会を誓う温かい会になりました。", image: "https://placehold.co/600x400/546E7A/white?text=旅立ちとお別れ会" },
            { chapter: "第4章：ロードトリップ (2025年4月〜6月)", title: "4月30日、8週間の旅へ", icon: "🚗", summary: "シドニー、ウルル、ダーウィン、ケアンズ… 大自然の中で自問自答を繰り返す。", details: "車でオーストラリア大陸を巡る8週間の旅へ。壮大な自然の中に身を置くと、自分の悩みがちっぽけに思えました。これからの人生で何を成し遂げたいのか、自分はどこへ向かうべきなのか。自分自身と深く向き合う、貴重な時間となりました。", image: "https://placehold.co/600x400/C2185B/white?text=ロードトリップ" },
            { chapter: "第4章：ロードトリップ (2025年4月〜6月)", title: "旅の終わりに見つけた「次の一歩」", icon: "🗺️", summary: "旅は、僕に次の目的を与えてくれた。", details: "旅を通して見つけた答えは、シンプルでした。ブリスベンに戻り、あのコミュニティをもっと大きく、もっと素晴らしい場所にしたい。そのために、学生ビザを取得してでも挑戦を続けよう。旅は僕の迷いを断ち切り、進むべき道をはっきりと示してくれました。", image: "https://placehold.co/600x400/7B1FA2/white?text=次の一歩" },
            { chapter: "第5章：365日目の約束 (2025年7月31日〜)", title: "新たな相棒と、新たな挑戦へ", icon: "🚀", summary: "僕の決意に共感し、「一緒にやりたい」と言ってくれる新たな相棒が待っていた。", details: "ブリスベンに戻ると、僕の旅の話とこれからの計画に目を輝かせ、「ぜひ一緒にやらせてほしい」という新しい仲間が現れました。僕の情熱が、また新しい情熱に火をつけた瞬間でした。一人じゃない、僕らの第二章がここから始まります。", image: "https://placehold.co/600x400/0277BD/white?text=新たな仲間" },
            { chapter: "第5章：365日目の約束 (2025年7月31日〜)", title: "ワーホリ最終日の7月31日、「終わり」じゃない、「始まり」だ", icon: "🏁", summary: "1stワーホリ終了。でも、僕の物語はここで終わらない。", details: "ワーキングホリデービザが切れる365日目。しかし、これは決してゴールではありません。翌日からは学生ビザに切り替え、僕はブリスベンに残ります。この街で、仲間たちと共に、僕のゲームのセカンドシーズンが幕を開けるのです。", image: "https://placehold.co/600x400/004D40/white?text=新たなスタート" },
        ],
        bonusAccordionData: [
            { title: "運営の哲学：僕らが大切にしていたこと", content: "なぜ「誰でも参加できる」にこだわったのか。それは、僕自身が最初に孤独を感じていたから。国籍、年齢、英語力に関わらず、誰もが安心して来られる場所。それが僕らの目指したコミュニティの形でした。"},
            { title: "仲間集めの流儀：どうやって運営チームを作ったか", content: "スキルや経験よりも、「わくわくという挑戦したい」という気持ちと、「誰かのために」という人柄を大切にしました。同じ目標を向いて、一緒に楽しんでくれる。そんな信頼できる仲間を見つけるための、僕なりの基準でした。"},
            { title: "リーダーとしての苦悩", content: "楽しいことばかりじゃなかったです。イベントの運営で多忙を極めたり、人間関係で悩んだり。でもその度に、なぜこれを始めたのかという原点に立ち返り、仲間とともに乗り越えてきました。"},
            { title: "これからコミュニティを作りたい君へ", content: "完璧な計画ではなく具体的な戦略。まずは「こんなのやりたい」という想いを形にしてみること。小さくてもいいから、最初の一歩を踏み出す勇気が何よりも大切です。失敗を恐れずに、楽しんでください！"},
        ],
        skillsData: [
            { name: "AI & 業務効率化", description: "イベント管理や情報発信を自動化。AIツールを駆使し、限られた時間で最大の成果を出す方法を学びました。" },
            { name: "HP制作 & デザイン", description: "ワーホリ関連のウェブサイトを未経験から構築。想いを形にするデザイン力を身につけました。" },
            { name: "マーケティング", description: "どうすれば人の心に響くのか。SNSでの発信一つひとつに戦略と思いを込めて、コミュニティの輪を広げました。" },
            { name: "チームビルディング", description: "多様な仲間と一つの目標に向かう難しさと喜びを知り、実践的なチーム作りを学びました。" },
        ],
    },
    en: {
        pageTitle: "THE BRISBANE GAME - A Gap Year, First Time Abroad, and 365 Days with Mates",
        langToggle: "日本語",
        headerSubtitle: "— A Gap Year, First Time Abroad, and 365 Days with Mates —",
        aboutTitle: "This is Taku's Story.",
        aboutSubtitle: "I took a leave of absence from graduate school and went to Australia. There, unexpected encounters and challenges awaited me. This is a record of one year, starting from a lonely beginning, creating a 'place to belong' with many friends, and drawing my own map.",
        introTitle: "This is Taku's Story.",
        introBody: "I took a leave of absence from graduate school and went to Australia. There, unexpected encounters and challenges awaited me. This is a record of one year, starting from a lonely beginning, creating a 'place to belong' with many friends, and drawing my own map.",
        epilogueTitle: "With Gratitude",
        epilogueH1: "To my friends at community_brisbane",
        epilogueP1: "I couldn't have come this far without the friends who stuck with me.",
        epilogueH2: "To all the friends I met on my first working holiday",
        epilogueP2: "Thank you for creating the '365 days' of this game.",
        bonusTitle: "Bonus Content",
        bonusH1: "Behind the Scenes of community_brisbane Operations",
        skillsTitle: "CLEAR REWARD",
        skillsSubtitle: "Through this game, Taku acquired many skills.",
        modalClose: "Close",
        storyData: [
            { chapter: "Prologue: The Adventure Begins (May-July 2024)", title: "May 2024, A Leave of Absence from Grad School", icon: "🎓", summary: "'I can't go on like this.' — The day I decided to step off the beaten path.", details: "I started questioning my research life in grad school, feeling strongly that I would regret it if I continued. I wanted to choose a path that truly fascinated me over expectations and a stable future. I submitted my leave of absence form, and my 365 days of drawing my own story, unbound by anyone, began.", image: "https://placehold.co/600x400/0B69A3/white?text=Day+of+Decision" },
            { chapter: "Prologue: The Adventure Begins (May-July 2024)", title: "First Challenge, to Cebu Island", icon: "✈️", summary: "A warm-up period for Australia. The days I first touched the outlines of English and what it means to live abroad.", details: "Feeling anxious about jumping straight into Australia, I decided to study English in Cebu, Philippines, for three months. It was my first time living abroad, experiencing diverse cultures, and learning the joys and difficulties of communicating in English. This experience became a crucial foundation for my life in Brisbane.", image: "https://placehold.co/600x400/1E88E5/white?text=Learning+in+Cebu" },
            { chapter: "Chapter 1: Brisbane, Solitude and Survival (August 2024)", title: "A One-Way Ticket and a Little Confidence from Cebu", icon: "🎫", summary: "To Australia. Life's real adventure finally begins.", details: "With a little confidence gained from my Cebu experience, I flew to Brisbane with a one-way ticket. The moment I landed, I realized the real challenge was just beginning. Amidst a mix of excitement and anxiety, my game truly started.", image: "https://placehold.co/600x400/299DBC/white?text=Arriving+in+Brisbane" },
            { chapter: "Chapter 1: Brisbane, Solitude and Survival (August 2024)", title: "First Trial: Set Up Your Life Infrastructure!", icon: "🏠", summary: "No house, no job, no friends. The reality of a survival life where every day was a quest.", details: "The first week was incredibly tough. Finding a place to live, opening a bank account, getting a mobile contract—each task felt like a huge obstacle. I struggled with the language barrier while desperately building the foundations of my new life.", image: "https://placehold.co/600x400/3F51B5/white?text=Survival+Mode" },
            { chapter: "Chapter 1: Brisbane, Solitude and Survival (August 2024)", title: "'Please Teach Me How to Make Friends!'", icon: "🗣️", summary: "I couldn't stand the loneliness and wanted to do something. That was the beginning of everything.", details: "My life was settling down, but the days without anyone to talk to were harder than I imagined. I knew I had to do something. 'How do I make friends?' That simple question and the urge to act were the first sparks that led to creating the community.", image: "https://placehold.co/600x400/5C6BC0/white?text=Facing+Loneliness" },
            { chapter: "Chapter 2: The Day Our 'Place' Was Born (Aug 25 - Oct 2024)", title: "August 25, community_brisbane is Born", icon: "🎉", summary: "'If it doesn't exist, just make it.' — The start of the most interesting game of my life.", details: "Waiting changes nothing. So I thought, 'Why not create the opportunity and place for people to gather myself?' I announced an event on social media. Only a few people came at first, but that was the birth of our community.", image: "https://placehold.co/600x400/F47C20/white?text=Community+is+Born" },
            { chapter: "Chapter 2: The Day Our 'Place' Was Born (Aug 25 - Oct 2024)", title: "First Friends and First Wall: A Crisis of Survival", icon: "🧱", summary: "My roommates helped, but then they left, and I was at a loss.", details: "Initially, my roommates helped run things, but they eventually left Brisbane for their own reasons. I found myself alone, burdened by their parting words to 'keep it going.' The pressure of running the community by myself was crushing.", image: "https://placehold.co/600x400/78909C/white?text=Crisis+of+Survival" },
            { chapter: "Chapter 2: The Day Our 'Place' Was Born (Aug 25 - Oct 2024)", title: "October 17, The Game-Changing Onigiri Event", icon: "🍙", summary: "A make-or-break onigiri event led to meeting new collaborators.", details: "I had to create a new wave. I planned an event where we'd make onigiri, a symbol of Japanese culture. It was a huge success, attracting many people and, more importantly, leading me to new friends who wanted to help run the community.", image: "https://placehold.co/600x400/4CAF50/white?text=Onigiri+Event" },
            { chapter: "Chapter 2: The Day Our 'Place' Was Born (Aug 25 - Oct 2024)", title: "The Challenge and Failure of Diversification", icon: "🧭", summary: "The failure of other projects taught me the meaning of 'being serious'.", details: "I tried my hand at other ventures, like an English conversation circle and a bike rental service. But they were all half-hearted and failed. This taught me the importance of focusing seriously on one thing. I realized what I truly needed to do was nurture the community.", image: "https://placehold.co/600x400/FFC107/white?text=Challenge+and+Failure" },
            { chapter: "Chapter 2: The Day Our 'Place' Was Born (Aug 25 - Oct 2024)", title: "The 'Breathing Room' a $30/hour Wage Gave Me", icon: "💰", summary: "By the end of October, I had saved $6000 in 1.5 months. Financial freedom gave me the courage and time to act.", details: "I was lucky to find a well-paying job to cover my living expenses. Financial stability is directly linked to mental stability. With no money worries, I had the 'breathing room' to pour even more passion into the community.", image: "https://placehold.co/600x400/8BC34A/white?text=Financial+Freedom" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "November 2, Meeting My Partner", icon: "🤝", summary: "A new dream was born: to accomplish something with this friend.", details: "During a tough time with operations, I met the perfect partner who resonated with my passion and wanted to join. Meeting him accelerated the community's growth and showed me things I couldn't have seen alone. I was convinced we could do great things together.", image: "https://placehold.co/600x400/673AB7/white?text=The+Perfect+Partner" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "What Encounters and Farewells Taught Me", icon: "👣", summary: "The days with friends broadened my values and showed me life's options.", details: "On a working holiday, you meet new people and say goodbye just as often. Through these fleeting relationships, I learned to be myself without comparing, and to cherish the limited time we have. Friendships that transcended nationality and culture expanded my world immensely.", image: "https://placehold.co/600x400/9C27B0/white?text=Encounters+and+Farewells" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "Community Frenzy: Christmas Party and Year-End BBQ", icon: "🎄", summary: "A whirlwind of excitement created with friends. Our story was just getting more interesting.", details: "The Christmas party we planned with our team drew over 50 people and was a massive success. The year-end BBQ was also a blast. I was moved to see the community had truly become a 'place to belong' for people. This frenzy was proof that our efforts had taken shape.", image: "https://placehold.co/600x400/E91E63/white?text=Event+Frenzy" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "Year-End Decision: I'll Stay Here Another Year", icon: "🗓️", summary: "Faced with the goal I found with my friends, I decided to extend my leave for another year.", details: "My original plan was to return to Japan after a year. But I couldn't bear to leave this community and my friends. After much thought, I contacted my university and family in Japan and arranged to extend my leave. I made a big decision, true to my feelings.", image: "https://placehold.co/600x400/F44336/white?text=The+Big+Decision" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "Realizing the Importance of Friends on My Birthday", icon: "🎂", summary: "Friends who gathered and celebrated for me. I am who I am today because of them.", details: "My friends threw me a surprise birthday party. To be celebrated so warmly in a foreign country... it felt like a dream compared to the loneliness of a few months ago. It was a day I was truly glad I had created this community.", image: "https://placehold.co/600x400/FF9800/white?text=Best+Birthday" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "February 15, Festival Collaboration with a Japanese Grocery Store", icon: "🏮", summary: "The largest event ever, involving a local Japanese grocery store.", details: "Our activities gained local recognition, leading to a collaboration with a Japanese grocery store. My partner brilliantly led the project from planning to execution. Seeing his growth was a joy for me as well. It was a memorable day when our community created new value by collaborating with others.", image: "https://placehold.co/600x400/D32F2F/white?text=Festival+Collaboration" },
            { chapter: "Chapter 4: Road Trip (Apr-Jun 2025)", title: "What I've Done at community_brisbane", icon: "📜", summary: "The place I created was overflowing with many people's smiles and 'thank yous.'", details: "Before my trip, I reflected on my activities. Weekly events, social media posts, countless encounters. The small step I took had become a part of many people's lives in Brisbane. I felt a great sense of accomplishment and gratitude.", image: "https://placehold.co/600x400/607D8B/white?text=Looking+Back" },
            { chapter: "Chapter 4: Road Trip (Apr-Jun 2025)", title: "April, Decision to Leave and Farewell Party", icon: "👋", summary: "The moment I realized I had a place I wanted to protect. And then the farewell party.", details: "I decided to leave Brisbane temporarily to get my second-year visa. Friends told me they'd be sad if the community disappeared. I was moved that the place I created was wanted, even without me, and I felt a strong desire to protect it. The farewell party was a warm gathering where we promised to meet again.", image: "https://placehold.co/600x400/546E7A/white?text=Farewell+Party" },
            { chapter: "Chapter 4: Road Trip (Apr-Jun 2025)", title: "April 30, To an 8-Week Journey", icon: "🚗", summary: "Sydney, Uluru, Darwin, Cairns... Repeatedly asking myself in the great outdoors.", details: "I set off on an 8-week road trip across the Australian continent. Immersed in the magnificent nature, my own worries seemed trivial. It was a precious time for deep self-reflection about what I want to achieve in life and where I should go.", image: "https://placehold.co/600x400/C2185B/white?text=The+Road+Trip" },
            { chapter: "Chapter 4: Road Trip (Apr-Jun 2025)", title: "The 'Next Step' I Found at the End of the Journey", icon: "🗺️", summary: "The journey gave me my next purpose.", details: "The answer I found on my trip was simple: I want to return to Brisbane and make that community bigger and better. To do that, I'll get a student visa and continue the challenge. The journey cleared my doubts and showed me the path forward.", image: "https://placehold.co/600x400/7B1FA2/white?text=The+Next+Step" },
            { chapter: "Chapter 5: The Promise on Day 365 (July 31, 2025 - )", title: "To a New Partner and a New Challenge", icon: "🚀", summary: "A new partner, inspired by my resolve, was waiting for me.", details: "When I returned to Brisbane, a new friend, whose eyes sparkled at my stories and future plans, said, 'I want to do it with you.' It was a moment when my passion ignited another. I'm not alone. Our second chapter starts here.", image: "https://placehold.co/600x400/0277BD/white?text=A+New+Partner" },
            { chapter: "Chapter 5: The Promise on Day 365 (July 31, 2025 - )", title: "July 31, It's Not the 'End,' It's the 'Beginning'", icon: "🏁", summary: "First working holiday ends. But my story doesn't end here.", details: "Day 365, my working holiday visa expires. But this is not the end. The very next day, I switch to a student visa and remain in Brisbane. In this city, with my friends, the second season of my game begins.", image: "https://placehold.co/600x400/004D40/white?text=A+New+Beginning" },
        ],
        bonusAccordionData: [
            { title: "Our Philosophy: What We Valued", content: "Why did we insist on 'everyone is welcome'? Because I myself felt lonely at first. A place where anyone could feel safe, regardless of nationality, age, or English ability. That was the community we aimed for." },
            { title: "The Art of Gathering Friends: How We Built Our Team", content: "More than skills or experience, we valued the excitement of wanting to take on challenges and the personality of wanting to do things for others. People who looked in the same direction and would enjoy the journey with us. That was my criteria for finding trustworthy friends." },
            { title: "Struggles as a Leader", content: "It wasn't all fun. Sometimes we were extremely busy with event operations, or had relationship issues. But each time, we overcame it by returning to our origin—why we started this—and working through it together as a team." },
            { title: "To You Who Wants to Build a Community", content: "You don't need a perfect plan, but you do need concrete strategies. First, try to give form to your thought of 'I want to do something like this.' Even if it's small, the courage to take the first step is more important than anything. Don't be afraid to fail, and just have fun with it!" },
        ],
        skillsData: [
            { name: "AI & Business Efficiency", description: "Automated event management and information dissemination. I learned how to achieve maximum results in a limited time by using AI tools." },
            { name: "Website & Design", description: "Built working holiday-related websites from scratch with no experience. I acquired the design skills to give form to my ideas." },
            { name: "Marketing", description: "How to resonate with people's hearts. I expanded the community's circle by putting strategy and thought into every social media post." },
            { name: "Team Building", description: "I learned the difficulty and the immense joy of working towards a single goal with a diverse group of friends, gaining practical team-building skills." },
        ],
    }
};

// Function to render all dynamic content based on the current language
function renderContent() {
    const T = translations[currentLang];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Update page title
    document.title = T.pageTitle;
    
    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = T.langToggle;
    }
    
    // Update header subtitle
    const headerSubtitle = document.getElementById('header-subtitle');
    if (headerSubtitle) {
        headerSubtitle.textContent = T.headerSubtitle;
    }
    
    // Update introduction section
    const introTitle = document.getElementById('intro-title');
    const introBody = document.getElementById('intro-body');
    if (introTitle) {
        introTitle.textContent = T.introTitle;
    }
    if (introBody) {
        introBody.textContent = T.introBody;
    }
    
    // Update epilogue section
    const epilogueTitle = document.getElementById('epilogue-title');
    const epilogueH1 = document.getElementById('epilogue-h1');
    const epilogueP1 = document.getElementById('epilogue-p1');
    const epilogueH2 = document.getElementById('epilogue-h2');
    const epilogueP2 = document.getElementById('epilogue-p2');
    
    if (epilogueTitle) epilogueTitle.textContent = T.epilogueTitle;
    if (epilogueH1) epilogueH1.textContent = T.epilogueH1;
    if (epilogueP1) epilogueP1.textContent = T.epilogueP1;
    if (epilogueH2) epilogueH2.textContent = T.epilogueH2;
    if (epilogueP2) epilogueP2.textContent = T.epilogueP2;
    
    // Update bonus section
    const bonusTitle = document.getElementById('bonus-title');
    const bonusH1 = document.getElementById('bonus-h1');
    
    if (bonusTitle) bonusTitle.textContent = T.bonusTitle;
    if (bonusH1) bonusH1.textContent = T.bonusH1;
    
    // Update skills section
    const skillsTitle = document.getElementById('skills-title');
    const skillsSubtitle = document.getElementById('skills-subtitle');
    
    if (skillsTitle) skillsTitle.textContent = T.skillsTitle;
    if (skillsSubtitle) skillsSubtitle.textContent = T.skillsSubtitle;
    
    // Update modal close button text
    const modalCloseText = document.getElementById('modal-close-text');
    if (modalCloseText) {
        modalCloseText.textContent = T.modalClose;
    }

    // Clear and re-render the story timeline
    const timelineContainer = document.getElementById('timeline-content');
    if (timelineContainer) {
        timelineContainer.innerHTML = '';
        
        // Timeline data with images and colors
        const timelineData = [
            {
                number: "01",
                icon: "🎓",
                title: "序章：冒険の始まり",
                subtitle: "PROLOGUE",
                description: "大学院を休学し、オーストラリアへの準備期間。セブ島での語学留学を通じて、海外生活の基礎を築きました。",
                color: "from-cyan-400 to-blue-500",
                image: "images/santa 169.jpg",
                details: "自分の人生を見つめなおし、「このままでは後悔する」という強い思いが込み上げてきました。周りの期待や安定した未来よりも、自分が本当に心惹かれる道を選びたい。そう決意し、休学届を提出。ここから、誰にも縛られない、自分だけの物語を描くための365日が始まりました。"
            },
            {
                number: "02", 
                icon: "✈️",
                title: "最初の挑戦、セブ島へ",
                subtitle: "CEBU",
                description: "オーストラリアへの助走期間。英語と、海外で生きるということに初めて触れた日々。",
                color: "from-red-400 to-pink-500",
                image: "images/beach.JPEG",
                details: "いきなりオーストラリアへ飛び込むのは不安だったので、まずはフィリピン・セブ島で3ヶ月の語学留学をすることに。ここで初めて海外で生活し、多様な文化に触れ、英語でコミュニケーションをとる楽しさと難しさを学びました。"
            },
            {
                number: "03",
                icon: "🎫",
                title: "片道航空券と、セブ島で得た小さな自信",
                subtitle: "ARRIVAL",
                description: "オーストラリアへ。人生の本当の冒険が、ついに幕を開ける。",
                color: "from-orange-400 to-yellow-500",
                image: "images/bench.JPEG",
                details: "セブ島での経験で少しだけ自信をつけ、片道航空券を握りしめてブリスベンへ。しかし、空港に降り立った瞬間、本当の挑戦はここからだと実感しました。期待と不安が入り混じる中、僕のゲームが本格的にスタートしました。"
            },
            {
                number: "04",
                icon: "🏠",
                title: "最初の試練：生活インフラを整えよ！",
                subtitle: "SURVIVAL",
                description: "家なし、仕事なし、友達なし。毎日がクエストだった、サバイバル生活のリアル。",
                color: "from-red-400 to-pink-500",
                image: "images/castle.JPEG",
                details: "最初の1週間は本当に過酷でした。住む家を探し、銀行口座を開設し、携帯電話を契約する。一つ一つのタスクが大きな壁のように感じられました。言葉の壁にもぶつかりながら、必死で生活の基盤を築いていきました。"
            },
            {
                number: "05",
                icon: "🗣️",
                title: "「友達の作り方、教えてください！」",
                subtitle: "LONELINESS",
                description: "孤独に耐えきれず、なにかしたい。それが、すべての始まりだった。",
                color: "from-cyan-400 to-blue-500",
                image: "images/fusya7.JPEG",
                details: "生活は安定してきたものの、独りの日々は想像以上に辛いものでした。このままではいけない。どうすれば友達ができるんだろう？その純粋な問いと行動したいという衝動が、後のコミュニティ設立へと繋がる最初のきっかけでした。"
            },
            {
                number: "06",
                icon: "🎉",
                title: "8月25日、community_brisbane爆誕",
                subtitle: "BIRTH",
                description: "「ないなら、作ればいい」― 友達づくりの「機会」を創るという、人生で一番面白いゲームの始まり。",
                color: "from-green-400 to-teal-500",
                image: "images/simonada.JPEG",
                details: "待っていても何も変わらない。それなら、自分が人々が集まれる「機会」や「場所」を作ればいいんだ。最初は数人しか集まらなかったけれど、これが僕らのコミュニティの始まりでした。"
            },
            {
                number: "07",
                icon: "🧱",
                title: "最初の仲間と、最初の壁：存続の危機",
                subtitle: "CRISIS",
                description: "ルームメイトたちが手伝ってくれたが、彼らが去り、運営の危機。",
                color: "from-red-400 to-pink-500",
                image: "images/takusenaka.jpg",
                details: "当初はルームメイトたちが運営を手伝ってくれましたが、彼らもそれぞれブリスベンを離れていきました。気づけば運営は僕一人に。「もっとやりたかった」という去った仲間の言葉を背負いながらたった一人でコミュニティを続けることに。"
            },
            {
                number: "08",
                icon: "🍙",
                title: "10月17日、方向転換のおにぎりイベント",
                subtitle: "TURNING POINT",
                description: "おにぎりイベントで、新たな協力者と出会う。",
                color: "from-orange-400 to-yellow-500",
                image: "images/takuroadtrip.jpg",
                details: "このままではダメだ。何か新しい流れを作らなければ。そう考えて企画したのが、日本文化の象徴でもある「おにぎり」をみんなで作るイベントでした。このイベントが大当たりし、多くの人が集まってくれただけでなく、運営に協力してくれる新しい仲間との出会いにも繋がりました。"
            },
            {
                number: "09",
                icon: "🤝",
                title: "11月2日、相棒との出会い",
                subtitle: "PARTNERSHIP",
                description: "この仲間と何かを成し遂げたいという、新しい夢ができた。",
                color: "from-purple-400 to-indigo-500",
                image: "images/koala.jpg",
                details: "運営に悩んでいた時期に、僕の情熱に共感し、「一緒にやりたい」と言ってくれる最高の相棒に出会いました。彼との出会いがコミュニティをさらに加速させ、一人では見えなかった景色を見せてくれました。この仲間となら、もっと大きなことができる。そう確信しました。"
            },
            {
                number: "10",
                icon: "🎄",
                title: "コミュニティの熱狂：クリスマス会と忘年会BBQ",
                subtitle: "EXCITEMENT",
                description: "仲間たちと作り上げた熱狂の渦。僕らの物語は、これからもっと面白くなる。",
                color: "from-red-400 to-pink-500",
                image: "images/bbqniku.jpg",
                details: "相棒や運営メンバーと共に企画したクリスマス会には50人以上が集まり、大成功を収めました。年末のBBQも大盛況。コミュニティが確かに人々の「居場所」になっていることを実感し、感動で胸が熱くなりました。この熱狂は、僕らの努力が形になった証でした。"
            },
            {
                number: "11",
                icon: "🗓️",
                title: "年末の決断：もう一年、ここにいる",
                subtitle: "DECISION",
                description: "仲間と見つけた目標を前に、休学をもう一年延長することを決めた日。",
                color: "from-cyan-400 to-blue-500",
                image: "images/urulu.jpg",
                details: "当初の計画では、1年で日本に帰国する予定でした。しかし、このコミュニティと仲間たちとの未来を考えると、どうしても離れがたい。悩んだ末に、大学や家族に連絡し、もう1年休学を延長させてもらうことに。自分の気持ちに正直に、大きな決断を下しました。"
            },
            {
                number: "12",
                icon: "🚗",
                title: "4月30日、8週間の旅へ",
                subtitle: "JOURNEY",
                description: "シドニー、ウルル、ダーウィン、ケアンズ… 大自然の中で自問自答を繰り返す。",
                color: "from-green-400 to-teal-500",
                image: "images/takubluemountain.JPG",
                details: "車でオーストラリア大陸を巡る8週間の旅へ。壮大な自然の中に身を置くと、自分の悩みがちっぽけに思えました。これからの人生で何を成し遂げたいのか、自分はどこへ向かうべきなのか。自分自身と深く向き合う、貴重な時間となりました。"
            },
            {
                number: "13",
                icon: "🗺️",
                title: "旅の終わりに見つけた「次の一歩」",
                subtitle: "DISCOVERY",
                description: "旅は、僕に次の目的を与えてくれた。",
                color: "from-orange-400 to-yellow-500",
                image: "images/takusmile.JPG",
                details: "旅を通して見つけた答えは、シンプルでした。ブリスベンに戻り、あのコミュニティをもっと大きく、もっと素晴らしい場所にしたい。そのために、学生ビザを取得してでも挑戦を続けよう。旅は僕の迷いを断ち切り、進むべき道をはっきりと示してくれました。"
            },
            {
                number: "14",
                icon: "🚀",
                title: "新たな相棒と、新たな挑戦へ",
                subtitle: "NEW BEGINNING",
                description: "僕の決意に共感し、「一緒にやりたい」と言ってくれる新たな相棒が待っていた。",
                color: "from-purple-400 to-indigo-500",
                image: "images/train.JPEG",
                details: "ブリスベンに戻ると、僕の旅の話とこれからの計画に目を輝かせ、「ぜひ一緒にやらせてほしい」という新しい仲間が現れました。僕の情熱が、また新しい情熱に火をつけた瞬間でした。一人じゃない、僕らの第二章がここから始まります。"
            },
            {
                number: "15",
                icon: "🏁",
                title: "ワーホリ最終日の7月31日、「終わり」じゃない、「始まり」だ",
                subtitle: "PROMISE",
                description: "1stワーホリ終了。でも、僕の物語はここで終わらない。",
                color: "from-cyan-400 to-blue-500",
                image: "images/brisblue.JPEG",
                details: "ワーキングホリデービザが切れる365日目。しかし、これは決してゴールではありません。翌日からは学生ビザに切り替え、僕はブリスベンに残ります。この街で、仲間たちと共に、僕のゲームのセカンドシーズンが幕を開けるのです。"
            }
        ];

        timelineData.forEach((item, index) => {
            const isLeft = index % 2 === 1; // Alternate left and right
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item relative mb-16 fade-in-up`;
            timelineItem.style.transitionDelay = `${index * 200}ms`;
            
            timelineItem.innerHTML = `
                <div class="flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}">
                    <!-- Content Side -->
                    <div class="w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}">
                        <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-center ${isLeft ? 'justify-end' : 'justify-start'} mb-4">
                                <div class="text-4xl mr-3">${item.icon}</div>
                                <div class="text-6xl font-bold text-gray-300">${item.number}</div>
                            </div>
                            <div class="bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-lg inline-block mb-3">
                                <span class="font-bold text-sm">${item.subtitle}</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">${item.title}</h3>
                            <p class="text-gray-600 leading-relaxed">${item.description}</p>
                        </div>
                    </div>
                    
                    <!-- Timeline Dot -->
                    <div class="w-1/2 flex justify-center relative">
                        <div class="w-8 h-8 bg-gradient-to-r ${item.color} rounded-full border-4 border-white shadow-lg relative z-10"></div>
                        <div class="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
                    </div>
                    
                    <!-- Image Side with Hover Details -->
                    <div class="w-1/2 ${isLeft ? 'pl-8' : 'pr-8'}">
                        <div class="relative group cursor-pointer">
                            <div class="w-full h-48 rounded-lg overflow-hidden shadow-lg">
                                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                            </div>
                            <!-- Hover Overlay with Details -->
                            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 rounded-lg flex items-center justify-center p-6">
                                <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <h4 class="text-lg font-bold mb-3">${item.title}</h4>
                                    <p class="text-sm leading-relaxed">${item.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            timelineContainer.appendChild(timelineItem);
            observer.observe(timelineItem);
        });
    } else {
        console.error('Timeline container not found');
    }

    // Clear and re-render the accordion section
    const accordionContainer = document.getElementById('accordion-container');
    if (accordionContainer) {
        accordionContainer.innerHTML = '';
        T.bonusAccordionData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'border border-gray-200 rounded-lg bg-white shadow-sm';
            div.innerHTML = `
                <button class="accordion-header w-full flex justify-between items-center p-5 text-left font-bold text-[#212529] hover:bg-gray-50 transition-colors">
                    <span>${item.title}</span>
                    <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="accordion-content">
                    <p class="p-5 pt-0 text-[#495057]">${item.content}</p>
                </div>
            `;
            accordionContainer.appendChild(div);
        });
        
        // Add event listeners to the new accordion headers
        document.querySelectorAll('.accordion-header').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('svg');
                const isOpening = !content.style.maxHeight || content.style.maxHeight === "0px";
                
                // Close all other accordions first
                document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = "0px");
                document.querySelectorAll('.accordion-header svg').forEach(i => i.style.transform = 'rotate(0deg)');

                // Open the clicked accordion if it was closed
                if (isOpening) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    } else {
        console.error('Accordion container not found');
    }

    // Clear and re-render the skills grid
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = '';
        T.skillsData.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'flex items-start space-x-4 text-left';
            skillCard.innerHTML = `
                <div class="flex-shrink-0 w-12 h-12 rounded-full ${skill.name.includes('AI') ? 'bg-purple-100' : skill.name.includes('HP') || skill.name.includes('Website') ? 'bg-pink-100' : skill.name.includes('マーケティング') || skill.name.includes('Marketing') ? 'bg-sky-100' : 'bg-indigo-100'} flex items-center justify-center">
                    ${getSkillIcon(skill.name)}
                </div>
                <div>
                    <h4 class="font-bold text-lg text-[#212529] mb-1">${skill.name}</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">${skill.description}</p>
                </div>
            `;
            skillsGrid.appendChild(skillCard);
        });
    } else {
        console.error('Skills grid not found');
    }

    // Re-apply the observer to all elements that need the fade-in animation
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// Function to get the appropriate SVG icon based on the skill name
function getSkillIcon(skillName) {
    if (skillName.includes('AI')) {
        return `<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 12a4 4 0 118 0 4 4 0 01-8 0z"></path></svg>`;
    } else if (skillName.includes('HP') || skillName.includes('Website')) {
        return `<svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`;
    } else if (skillName.includes('マーケティング') || skillName.includes('Marketing')) {
        return `<svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`;
    } else { // Team Building
        return `<svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`;
    }
}

// --- Modal Handling ---
    const modal = document.getElementById('storyModal');
const modalContent = document.getElementById('modalContent');
    const modalImage = document.getElementById('modalImage');
    
// Function to open the modal with content for a specific story item
function openModal(index) {
    const modal = document.getElementById('storyModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const T = translations[currentLang];
    const story = T.storyData[index];
    
    // 画像のエラーハンドリングを改善
    if (story.image && story.image !== '') {
        modalImage.src = story.image;
        modalImage.style.display = 'block';
        modalImage.onerror = function() {
            this.style.display = 'none';
        };
    } else {
        modalImage.style.display = 'none';
    }
    
    modalTitle.textContent = story.title;
    modalBody.textContent = story.details;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('storyModal');
    const modalContent = document.getElementById('modalContent');
    
    modal.classList.remove('show');
    document.body.style.overflow = '';
    
    // モーダルが完全に閉じた後にコンテンツをリセット
    setTimeout(() => {
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        modalImage.src = '';
        modalImage.alt = '';
        modalTitle.textContent = '';
        modalBody.textContent = '';
    }, 300);
}

// Global function for modal close button
window.closeModal = closeModal;

// Timeline modal function
function openTimelineModal(index) {
    const timelineData = [
        {
            title: "序章：冒険の始まり",
            description: "大学院を休学し、オーストラリアへの準備期間。セブ島での語学留学を通じて、海外生活の基礎を築きました。",
            image: "images/santa 169.jpg",
            details: "自分の人生を見つめなおし、「このままでは後悔する」という強い思いが込み上げてきました。周りの期待や安定した未来よりも、自分が本当に心惹かれる道を選びたい。そう決意し、休学届を提出。ここから、誰にも縛られない、自分だけの物語を描くための365日が始まりました。"
        },
        {
            title: "最初の挑戦、セブ島へ",
            description: "オーストラリアへの助走期間。英語と、海外で生きるということに初めて触れた日々。",
            image: "images/beach.JPEG",
            details: "いきなりオーストラリアへ飛び込むのは不安だったので、まずはフィリピン・セブ島で3ヶ月の語学留学をすることに。ここで初めて海外で生活し、多様な文化に触れ、英語でコミュニケーションをとる楽しさと難しさを学びました。"
        },
        {
            title: "片道航空券と、セブ島で得た小さな自信",
            description: "オーストラリアへ。人生の本当の冒険が、ついに幕を開ける。",
            image: "images/bench.JPEG",
            details: "セブ島での経験で少しだけ自信をつけ、片道航空券を握りしめてブリスベンへ。しかし、空港に降り立った瞬間、本当の挑戦はここからだと実感しました。期待と不安が入り混じる中、僕のゲームが本格的にスタートしました。"
        },
        {
            title: "最初の試練：生活インフラを整えよ！",
            description: "家なし、仕事なし、友達なし。毎日がクエストだった、サバイバル生活のリアル。",
            image: "images/castle.JPEG",
            details: "最初の1週間は本当に過酷でした。住む家を探し、銀行口座を開設し、携帯電話を契約する。一つ一つのタスクが大きな壁のように感じられました。言葉の壁にもぶつかりながら、必死で生活の基盤を築いていきました。"
        },
        {
            title: "「友達の作り方、教えてください！」",
            description: "孤独に耐えきれず、なにかしたい。それが、すべての始まりだった。",
            image: "images/fusya7.JPEG",
            details: "生活は安定してきたものの、独りの日々は想像以上に辛いものでした。このままではいけない。どうすれば友達ができるんだろう？その純粋な問いと行動したいという衝動が、後のコミュニティ設立へと繋がる最初のきっかけでした。"
        },
        {
            title: "8月25日、community_brisbane爆誕",
            description: "「ないなら、作ればいい」― 友達づくりの「機会」を創るという、人生で一番面白いゲームの始まり。",
            image: "images/simonada.JPEG",
            details: "待っていても何も変わらない。それなら、自分が人々が集まれる「機会」や「場所」を作ればいいんだ。最初は数人しか集まらなかったけれど、これが僕らのコミュニティの始まりでした。"
        },
        {
            title: "最初の仲間と、最初の壁：存続の危機",
            description: "ルームメイトたちが手伝ってくれたが、彼らが去り、運営の危機。",
            image: "images/takusenaka.jpg",
            details: "当初はルームメイトたちが運営を手伝ってくれましたが、彼らもそれぞれブリスベンを離れていきました。気づけば運営は僕一人に。「もっとやりたかった」という去った仲間の言葉を背負いながらたった一人でコミュニティを続けることに。"
        },
        {
            title: "10月17日、方向転換のおにぎりイベント",
            description: "おにぎりイベントで、新たな協力者と出会う。",
            image: "images/takuroadtrip.jpg",
            details: "このままではダメだ。何か新しい流れを作らなければ。そう考えて企画したのが、日本文化の象徴でもある「おにぎり」をみんなで作るイベントでした。このイベントが大当たりし、多くの人が集まってくれただけでなく、運営に協力してくれる新しい仲間との出会いにも繋がりました。"
        },
        {
            title: "11月2日、相棒との出会い",
            description: "この仲間と何かを成し遂げたいという、新しい夢ができた。",
            image: "images/koala.jpg",
            details: "運営に悩んでいた時期に、僕の情熱に共感し、「一緒にやりたい」と言ってくれる最高の相棒に出会いました。彼との出会いがコミュニティをさらに加速させ、一人では見えなかった景色を見せてくれました。この仲間となら、もっと大きなことができる。そう確信しました。"
        },
        {
            title: "コミュニティの熱狂：クリスマス会と忘年会BBQ",
            description: "仲間たちと作り上げた熱狂の渦。僕らの物語は、これからもっと面白くなる。",
            image: "images/bbqniku.jpg",
            details: "相棒や運営メンバーと共に企画したクリスマス会には50人以上が集まり、大成功を収めました。年末のBBQも大盛況。コミュニティが確かに人々の「居場所」になっていることを実感し、感動で胸が熱くなりました。この熱狂は、僕らの努力が形になった証でした。"
        },
        {
            title: "年末の決断：もう一年、ここにいる",
            description: "仲間と見つけた目標を前に、休学をもう一年延長することを決めた日。",
            image: "images/urulu.jpg",
            details: "当初の計画では、1年で日本に帰国する予定でした。しかし、このコミュニティと仲間たちとの未来を考えると、どうしても離れがたい。悩んだ末に、大学や家族に連絡し、もう1年休学を延長させてもらうことに。自分の気持ちに正直に、大きな決断を下しました。"
        },
        {
            title: "4月30日、8週間の旅へ",
            description: "シドニー、ウルル、ダーウィン、ケアンズ… 大自然の中で自問自答を繰り返す。",
            image: "images/takubluemountain.JPG",
            details: "車でオーストラリア大陸を巡る8週間の旅へ。壮大な自然の中に身を置くと、自分の悩みがちっぽけに思えました。これからの人生で何を成し遂げたいのか、自分はどこへ向かうべきなのか。自分自身と深く向き合う、貴重な時間となりました。"
        },
        {
            title: "旅の終わりに見つけた「次の一歩」",
            description: "旅は、僕に次の目的を与えてくれた。",
            image: "images/takusmile.JPG",
            details: "旅を通して見つけた答えは、シンプルでした。ブリスベンに戻り、あのコミュニティをもっと大きく、もっと素晴らしい場所にしたい。そのために、学生ビザを取得してでも挑戦を続けよう。旅は僕の迷いを断ち切り、進むべき道をはっきりと示してくれました。"
        },
        {
            title: "新たな相棒と、新たな挑戦へ",
            description: "僕の決意に共感し、「一緒にやりたい」と言ってくれる新たな相棒が待っていた。",
            image: "images/train.JPEG",
            details: "ブリスベンに戻ると、僕の旅の話とこれからの計画に目を輝かせ、「ぜひ一緒にやらせてほしい」という新しい仲間が現れました。僕の情熱が、また新しい情熱に火をつけた瞬間でした。一人じゃない、僕らの第二章がここから始まります。"
        },
        {
            title: "ワーホリ最終日の7月31日、「終わり」じゃない、「始まり」だ",
            description: "1stワーホリ終了。でも、僕の物語はここで終わらない。",
            image: "images/brisblue.JPEG",
            details: "ワーキングホリデービザが切れる365日目。しかし、これは決してゴールではありません。翌日からは学生ビザに切り替え、僕はブリスベンに残ります。この街で、仲間たちと共に、僕のゲームのセカンドシーズンが幕を開けるのです。"
        }
    ];
    
    const item = timelineData[index];
    const modal = document.getElementById('storyModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalImage.src = item.image;
    modalImage.style.display = 'block';
    modalTitle.textContent = item.title;
    modalBody.textContent = item.details;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Global function for timeline modal
window.openTimelineModal = openTimelineModal;

// Add keyboard navigation for modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('storyModal');
        if (modal.classList.contains('show')) {
            closeModal();
        }
    }
});

// Add click outside modal to close
document.addEventListener('click', function(e) {
    const modal = document.getElementById('storyModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page with Japanese content
    renderContent();
    
    // Add event listener for language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            // Toggle language
            currentLang = currentLang === 'ja' ? 'en' : 'ja';
            // Re-render content with new language
            renderContent();
        });
    }
    
    // Initialize fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
});