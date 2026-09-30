INSERT INTO meetings (   date, meeting_type, presiding, conducting, announcements,   opening_hymn, opening_prayer, ward_business, stake_business,   sacrament_hymn, speakers, closing_hymn, closing_prayer ) VALUES 
( 
    '2026-01-04','testimony','Bishop Thompson','Brother Nakamura', ARRAY[]::TEXT[], '{"number":134,"title":"I Believe in Christ"}','Sister Park', '[]',false, '{"number":175,"title":"God, Our Father, Hear Us Pray"}', '[]', '{"number":219,"title":"Because I Have Been Given Much"}','Brother Alvarez' 
), 
(   '2026-01-11','regular','Bishop Thompson','Brother Nakamura',   
ARRAY['Ward temple night: Jan 30'],
   '{"number":2,"title":"The Spirit of God"}','Sister Ramirez',   '[{"description":"Sustaining of new Sunday School president"}]',true,   '{"number":169,"title":"In Remembrance of Thy Suffering"}',   '[{"name":"Sister Chen","topic":"The Sacrament","type":"speaker"},     {"name":"Brother Osei","topic":"Covenant Keeping","type":"speaker"}]',   '{"number":31,"title":"O God, Our Help in Ages Past"}','Brother Lewis' 
),
(   '2026-01-18','regular','Bishop Thompson','Sister Torres',   ARRAY['Ministering interviews this week'],   '{"number":85,"title":"How Firm a Foundation"}','Brother Kim',   '[{"description":"Release - Sister Martinez - Primary Teacher"},{"description":"Sustain - Sister Agbavor - Primary Teacher"}, {"description":"Sustain - Sister Mukiwa - RS 2nd Counselor"}]',false,   '{"number":173,"title":"While of These Emblems We Partake"}',   '[{"name":"Sister Nakamura","topic":"Personal Revelation","type":"speaker"},     {"name":"Youth Choir","topic":"","type":"musical-number"},     {"name":"Brother Santos","topic":"Temple Covenants","type":"speaker"}]',   '{"number":226,"title":"Improve the Shining Moments"}','Sister Jensen' 
),
(   
    '2026-09-27','stake','President Gimenez','President Lopez',   ARRAY['Hermosillo Temple will close from March 2027 to November 2027'],   '{"number": 122, "title":"Consider the lilies"}','Brother Leandro',   '[]',true,   '{"number": 177, "title": "God, Our Father, Hear Us Pray"}',   '[{"name": "Sister Jazmin Carmona", "topic":"Conversion experience", "type": "speaker"},     {"name": "Brother Jesus Emmanuel Cardenas", "topic": "Mission Experience and testimony", "type":"speaker"},     {"name": "Stake Choir", "topic": "", "type": "Musical Number"},     {"name": "Area Seventy Elder Valle", "topic": "Blessings to follow Christ", "type":"speaker"}   ]',   '{"number":200, "title": "Our Savior"}','Brother Mario' 
),
(   
    '2026-10-04','regular','President Dallin H. Oaks','President Henry B. Eyring',   ARRAY['Release of Area Seventies'],   '{"number": 122, "title":" Consider the lilies"}','Brother John D. Watts',   '[]',false,   '{}',   '[{"name": "Sister Reyna Aburto", "topic":"Following Christ", "type": "speaker"},     {"name": "Brother L. Todd Budge", "topic": "A winning testimony", "type":"speaker"},     {"name": "Tabernacle Choir", "topic": "", "type": "Musical Number"},     {"name": "Area Seventy Arnulfo Valenzuela", "topic": "Lifes path", "type":"speaker"}   ]',   '{"number":144, "title": "I Believe in Christ"}','Sister Gonzalez' 
),
(   
    '2026-09-06','testimony','Bishop Aspajo','Brother Luque',   ARRAY['Next Temple Trip to Hermosillo Sept 17'],   '{"number": 155, "title":" How great thou Art"}','Brother John D. Watts',   '[]',false,   '{"number": 134, "title": "In remembrance of Thy Name"}',   '[{"name": "Sister Micaela", "topic":"", "type": "testimony"},     {"name": "Brother Luis Acosta", "topic": "", "type":"testimony"},     {"name": "Jared Aviles", "topic": "", "type": "testimony"},     {"name": "Mireya Acosta", "topic": "", "type":"testimony"}   ]',   '{"number":145, "title": "Onward, Christian Soldiers"}','Sister Claudia' 
),
(   
    '2026-09-13','regular','President Jimenez','Bishop Aspajo',   ARRAY['Stake Conference Sept 27 at Infonavit Ward'],   '{"number": 101, "title":"Follow my Commandments"}','Sister Caldera Hernandez',   '[]',true,   '{"number": 166, "title": "In remembrance of Thy Name"}',   
    '[{"name": "Brother Luis Payan", "topic":"Blessings of Fasting and Fast Offerings", "type": "speaker"},     
    {"name": "Sister Xochitl Marbella", "topic": "Blessings of service", "type":"speaker"},     {"name": "Brother Jared Aviles", "topic": "The power of the book of Mormon", "type": "speaker"}   ]',   '{"number":177, "title": "Ill go where you want me to go"}','Sister Manuela Galvez' 
),
(   
    '2026-09-20','regular','Bishop Aspajo','Brother Aguilar',   
    ARRAY[]::TEXT[],   
    '{"number": 181, "title":"Love One Another"}','Sister Karely trujillo',   
    '[]',false,   
    '{"number": 116, "title": "Christ on the Cross Died"}',   
    '[{"name": "Brother Carlos Luque", "topic":"How the temple gives us power", "type": "speaker"},     
    {"name": "Sister Guadalupe Lopez", "topic": "How Ministering has increased my faith", "type":"speaker"},     
    {"name": "Brother Rebeca Jimenez", "topic": "The blessings to teach the Gospel to our family", "type": "speaker"}]',   
    '{"number":179, "title": "Pleasure on work"}','Sister Isabel' 
) ;