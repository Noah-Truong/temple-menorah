import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

const clergy = [
  {
    name: 'Rabbi Deborah Schuldenfrei',
    title: 'Interim Senior Rabbi',
    image: '/images/clergy/rabbi-schuldenfrei.jpg',
    bio: [
      'Rabbi Deborah Schuldenfrei brings over 20 years of dedicated service to the Jewish community. Ordained in 2006, she has served in various capacities throughout Southern California.',
      'Her previous roles include Assistant Rabbi at Congregation Shir HaMa\'alot in Irvine, Interim Senior Rabbi at Temple Kol Tikvah in Woodland Hills, and Head of School at Valley Beth Shalom Day School in Encino.',
      'Rabbi Schuldenfrei is married to Rabbi Brian Schuldenfrei, and together they have three sons, ages 15, 13, and 10.',
    ],
  },
  {
    name: 'Rabbi Rebeccah Yussman, M.A., MAEd',
    title: 'Rabbi-Educator',
    image: '/images/clergy/rabbi-yussman.jpg',
    bio: [
      'Rabbi Rebeccah Yussman has been serving Temple Menorah for 10 years, bringing her passion for education and community building to our congregation.',
      'Her responsibilities include youth and adult education, senior programs, Camp Menorah, and ritual/pastoral care. She was ordained at the Academy for Jewish Religion in Los Angeles.',
      'Rabbi Yussman is the proud mother of son Matan, who recently celebrated his bar mitzvah, and daughter Miriam, who is currently in the JLL program.',
    ],
  },
  {
    name: 'Rabbi Steven Silver',
    title: 'Rabbi Emeritus',
    image: '/images/clergy/rabbi-silver.jpg',
    bio: [
      'Rabbi Steven Silver served as the spiritual leader of Temple Menorah for 30 years, from 1987 to 2017. Born in Boston and raised in Anaheim, he graduated from UCLA in 1974 and was ordained at Hebrew Union College-Jewish Institute of Religion (HUC-JIR) in 1984.',
      'In 2009, he received a Doctor of Divinity (honoris causa) in recognition of his distinguished service to the Jewish community.',
      'During his tenure, Rabbi Silver brought significant growth in membership and expanded educational offerings, leaving a lasting legacy at Temple Menorah.',
    ],
  },
];

export default function ClergyPage() {
  return (
    <div>
      <PageHeader 
        title="Clergy" 
        subtitle="Meet our spiritual leaders dedicated to guiding our community"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="space-y-16">
            {clergy.map((member, index) => (
              <div key={index} className="card max-w-4xl mx-auto p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-52 h-52 rounded-full overflow-hidden mx-auto shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={208}
                        height={208}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-[var(--primary)] mb-3">{member.name}</h2>
                    <p className="text-xl text-[var(--secondary)] font-semibold mb-8">{member.title}</p>
                    {member.bio.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg text-[var(--foreground)] leading-relaxed mb-5 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
