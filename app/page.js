'use client';

import { useRef, useState } from 'react';
import MenuCard from '../components/MenuCard';
import AudioCard from '../components/AudioCard';
import StopAudioButton from '../components/StopAudioButton';

const animals = [
  { emoji: '🐱', label: 'Macja', audio: '/audio/kafshe/macja.mp3' },
  { emoji: '🐶', label: 'Qeni', audio: '/audio/kafshe/qeni.mp3' },
  { emoji: '🐻', label: 'Ariu', audio: '/audio/kafshe/ariu.mp3' },
  { emoji: '🐰', label: 'Lepuri', audio: '/audio/kafshe/lepuri.mp3' },
  { emoji: '🐦', label: 'Zogu', audio: '/audio/kafshe/zogu.mp3' },
  { emoji: '🐑', label: 'Delja', audio: '/audio/kafshe/delja.mp3' },
  { emoji: '🐄', label: 'Lopa', audio: '/audio/kafshe/lopa.mp3' },
  { emoji: '🐴', label: 'Kali', audio: '/audio/kafshe/kali.mp3' },
  { emoji: '🦆', label: 'Rosa', audio: '/audio/kafshe/rosa.mp3' },
  { emoji: '🐟', label: 'Peshku', audio: '/audio/kafshe/peshku.mp3' },
];

const numbers = [
  { emoji: '1️⃣', label: '1', audio: '/audio/numra/1.mp3' },
  { emoji: '2️⃣', label: '2', audio: '/audio/numra/2.mp3' },
  { emoji: '3️⃣', label: '3', audio: '/audio/numra/3.mp3' },
  { emoji: '4️⃣', label: '4', audio: '/audio/numra/4.mp3' },
  { emoji: '5️⃣', label: '5', audio: '/audio/numra/5.mp3' },
  { emoji: '6️⃣', label: '6', audio: '/audio/numra/6.mp3' },
  { emoji: '7️⃣', label: '7', audio: '/audio/numra/7.mp3' },
  { emoji: '8️⃣', label: '8', audio: '/audio/numra/8.mp3' },
  { emoji: '9️⃣', label: '9', audio: '/audio/numra/9.mp3' },
  { emoji: '🔟', label: '10', audio: '/audio/numra/10.mp3' },
  { emoji: '🔢', label: '11', audio: '/audio/numra/11.mp3' },
  { emoji: '🔢', label: '12', audio: '/audio/numra/12.mp3' },
  { emoji: '🔢', label: '13', audio: '/audio/numra/13.mp3' },
  { emoji: '🔢', label: '14', audio: '/audio/numra/14.mp3' },
  { emoji: '🔢', label: '15', audio: '/audio/numra/15.mp3' },
  { emoji: '🔢', label: '16', audio: '/audio/numra/16.mp3' },
  { emoji: '🔢', label: '17', audio: '/audio/numra/17.mp3' },
  { emoji: '🔢', label: '18', audio: '/audio/numra/18.mp3' },
  { emoji: '🔢', label: '19', audio: '/audio/numra/19.mp3' },
  { emoji: '🔢', label: '20', audio: '/audio/numra/20.mp3' },
];

const sleepItems = [
  { emoji: '🌙', label: 'Sure El-Fatiha', audio: '/audio/gjume/fatiha.mp3' },
  { emoji: '⭐', label: 'Sure El-Ihlas', audio: '/audio/gjume/ikhlas.mp3' },
  { emoji: '💫', label: 'Sure En-Nas', audio: '/audio/gjume/nas.mp3' },
];

const colors = [
  { emoji: '🔴', label: 'E kuqe', audio: '/audio/ngjyra/e-kuqe.mp3' },
  { emoji: '🔵', label: 'Blu', audio: '/audio/ngjyra/blu.mp3' },
  { emoji: '🟡', label: 'E verdhë', audio: '/audio/ngjyra/e-verdhe.mp3' },
  { emoji: '🟢', label: 'E gjelbër', audio: '/audio/ngjyra/e-gjelber.mp3' },
  { emoji: '🟠', label: 'Portokalli', audio: '/audio/ngjyra/portokalli.mp3' },
  { emoji: '🟣', label: 'Vjollcë', audio: '/audio/ngjyra/vjollce.mp3' },
  { emoji: '⚫', label: 'E zezë', audio: '/audio/ngjyra/e-zeze.mp3' },
  { emoji: '⚪', label: 'E bardhë', audio: '/audio/ngjyra/e-bardhe.mp3' },
  { emoji: '🟤', label: 'Kafe', audio: '/audio/ngjyra/kafe.mp3' },
  { emoji: '🌸', label: 'Rozë', audio: '/audio/ngjyra/roze.mp3' },
];

const shapes = [
  { emoji: '⚪', label: 'Rrethi', audio: '/audio/forma/rrethi.mp3' },
  { emoji: '⬜', label: 'Katrori', audio: '/audio/forma/katrori.mp3' },
  { emoji: '🔺', label: 'Trekëndëshi', audio: '/audio/forma/trekendeshi.mp3' },
  { emoji: '⭐', label: 'Ylli', audio: '/audio/forma/ylli.mp3' },
  { emoji: '💙', label: 'Zemra', audio: '/audio/forma/zemra.mp3' },
  { emoji: '🌙', label: 'Hëna', audio: '/audio/forma/hena.mp3' },
];

const family = [
  { emoji: '👩', label: 'Mami', audio: '/audio/familja/mami.mp3' },
  { emoji: '👨', label: 'Babi', audio: '/audio/familja/babi.mp3' },
  { emoji: '👧', label: 'Motra', audio: '/audio/familja/motra.mp3' },
  { emoji: '👦', label: 'Vëllai', audio: '/audio/familja/vellai.mp3' },
  { emoji: '👶', label: 'Bebi', audio: '/audio/familja/bebi.mp3' },
];

const goodActions = [
  { emoji: '🍼', label: 'Para ngrënies', audio: '/audio/veprime/para-ngrenies.mp3' },
  { emoji: '💧', label: 'Para pirjes së ujit', audio: '/audio/veprime/para-pirjes-se-ujit.mp3' },
  { emoji: '🤲', label: 'Bismilah', audio: '/audio/veprime/bismilah.mp3' },
  { emoji: '😊', label: 'Selam alejkum', audio: '/audio/veprime/selam-alejkum.mp3' },
  { emoji: '💖', label: 'Faleminderit', audio: '/audio/veprime/faleminderit.mp3' },
];

const foods = [
  { emoji: '🍎', label: 'Molla', audio: '/audio/ushqime/molla.mp3' },
  { emoji: '🍌', label: 'Banania', audio: '/audio/ushqime/banania.mp3' },
  { emoji: '🥛', label: 'Qumështi', audio: '/audio/ushqime/qumeshti.mp3' },
  { emoji: '🍞', label: 'Buka', audio: '/audio/ushqime/buka.mp3' },
  { emoji: '🧀', label: 'Djathi', audio: '/audio/ushqime/djathi.mp3' },
  { emoji: '🥚', label: 'Veza', audio: '/audio/ushqime/veza.mp3' },
];

const transport = [
  { emoji: '🚗', label: 'Makina', audio: '/audio/transport/makina.mp3' },
  { emoji: '🚌', label: 'Autobusi', audio: '/audio/transport/autobusi.mp3' },
  { emoji: '🚲', label: 'Biçikleta', audio: '/audio/transport/bicikleta.mp3' },
  { emoji: '✈️', label: 'Aeroplani', audio: '/audio/transport/aeroplani.mp3' },
  { emoji: '🚂', label: 'Treni', audio: '/audio/transport/treni.mp3' },
  { emoji: '🚢', label: 'Anija', audio: '/audio/transport/anija.mp3' },
];

const sections = {
  kafshet: {
    title: 'Kafshët',
    description: 'Prek një kafshë për ta dëgjuar.',
    items: animals,
  },
  numrat: {
    title: 'Numrat 1–20',
    description: 'Prek numrin për ta dëgjuar.',
    items: numbers,
  },
  gjume: {
    title: 'Gjumë',
    description: 'Sure të qeta për bebe.',
    items: sleepItems,
  },
  ngjyrat: {
    title: 'Ngjyrat',
    description: 'Mëso ngjyrat me zë.',
    items: colors,
  },
  format: {
    title: 'Format',
    description: 'Mëso format kryesore.',
    items: shapes,
  },
  familja: {
    title: 'Familja',
    description: 'Mëso familjarët.',
    items: family,
  },
  veprime: {
    title: 'Veprime të mira',
    description: 'Fjalë dhe veprime të bukura për bebe.',
    items: goodActions,
  },
  ushqime: {
    title: 'Ushqimet',
    description: 'Mëso ushqimet e para.',
    items: foods,
  },
  transport: {
    title: 'Transporti',
    description: 'Mëso mjetet e transportit.',
    items: transport,
  },
};

export default function Page() {
  const [activeSection, setActiveSection] = useState('kafshet');
  const sectionRef = useRef(null);

  const changeSection = (section) => {
    setActiveSection(section);

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const current = sections[activeSection];

  return (
    <main className="pageWrapper">
      <div className="headerBox">
        <h1 className="mainTitle">Bebi Musliman</h1>
        <p className="subtitle">
          Aplikacion edukativ për bebe me audio në shqip
        </p>
      </div>

      <div className="stickyMenuWrapper">
        <div className="topActions">
          <StopAudioButton />
          <button
            onClick={() => changeSection('kafshet')}
            className="backButton"
          >
            🏠 Kafshët
          </button>
        </div>

        <div className="horizontalMenu">
          <MenuCard
            emoji="🐻"
            label="Kafshët"
            active={activeSection === 'kafshet'}
            onClick={() => changeSection('kafshet')}
          />
          <MenuCard
            emoji="🔢"
            label="Numrat"
            active={activeSection === 'numrat'}
            onClick={() => changeSection('numrat')}
          />
          <MenuCard
            emoji="🌙"
            label="Gjumë"
            active={activeSection === 'gjume'}
            onClick={() => changeSection('gjume')}
          />
          <MenuCard
            emoji="🎨"
            label="Ngjyrat"
            active={activeSection === 'ngjyrat'}
            onClick={() => changeSection('ngjyrat')}
          />
          <MenuCard
            emoji="⭐"
            label="Format"
            active={activeSection === 'format'}
            onClick={() => changeSection('format')}
          />
          <MenuCard
            emoji="👨‍👩‍👧"
            label="Familja"
            active={activeSection === 'familja'}
            onClick={() => changeSection('familja')}
          />
          <MenuCard
            emoji="🤲"
            label="Veprime"
            active={activeSection === 'veprime'}
            onClick={() => changeSection('veprime')}
          />
          <MenuCard
            emoji="🍎"
            label="Ushqimet"
            active={activeSection === 'ushqime'}
            onClick={() => changeSection('ushqime')}
          />
          <MenuCard
            emoji="🚗"
            label="Transporti"
            active={activeSection === 'transport'}
            onClick={() => changeSection('transport')}
          />
        </div>
      </div>

      <section ref={sectionRef} className="sectionBox">
        <h2 className="sectionTitle">{current.title}</h2>
        <p className="sectionDescription">{current.description}</p>

        {current.items?.length ? (
          <div className="cardsGrid">
            {current.items.map((item, index) => (
              <AudioCard
                key={`${activeSection}-${index}`}
                emoji={item.emoji}
                label={item.label}
                audio={item.audio}
              />
            ))}
          </div>
        ) : (
          <div className="emptyBox">Ky seksion është bosh.</div>
        )}
      </section>
    </main>
  );
}