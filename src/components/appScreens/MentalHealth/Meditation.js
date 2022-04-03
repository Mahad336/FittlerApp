import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
// import { ScrollView } from "react-native-gesture-handler";

const Meditation = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={{ textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
          Five Meditation Techniques Used by Mental Health Professionals:
        </Text>
        {/* ============== Bullets ================== */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Guided Imagery</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Progressive Muscle Relaxation</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>3)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Hypnosis</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>4)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Hypnosis</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>5)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Focused Breathing</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          {/* <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text> */}
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Now is an exciting time to become a mental health professional! Increasingly, therapists are including meditation techniques in their treatment plans. Regular meditation helps clients achieve the goals of counseling. Here are five therapeutic methods and how to employ them in your future practice.</Text>
        </View>




        <Text style={{ textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
          1. Guided Imagery
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>For this meditation method, the therapist leads a client in visualizing pleasing objects or scenes. For guided imagery to be effective, the counselor must first take a thorough client history. Then, knowing what objects relax a patient, the counselor suggests images on which to focus.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Here’s an example. With eyes closed, a patient is asked to picture a peaceful beach on a sunny day. Next, sensory impressions are explored. The client describes the sights, sounds, and aromas evoked by the scene.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>To conjure the sense of texture, the counselor might ask, “What does the sand feel like on your bare feet?” The therapist may also play instrumental music that complements the visualization. The goal is to mentally engage all five senses, if possible.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Meanwhile, the counselor observes the client for signs of contentment, such as changes in posture, facial expression, and voice tone. As breathing slows, muscles loosen, and mental activity wanes.</Text>
        </View>

        <Text style={{marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 1 }}>
        Applications
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Therapists may teach guided imagery in both private and group sessions. This technique is effective for treating anxiety, grief, addiction, depression, and post-traumatic stress disorder (PTSD). It can aid quitting smoking and reduce the awareness of pain.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>For instance, a cancer patient might picture vibrant cells and organs glowing inside them. An arthritic client can soften pain by turning down the volume on an imaginary radio. Positive visualizations can diffuse relationship tension and resolve family issues. In this way, guided imagery is both relaxing and helpful in achieving a desired outcome.</Text>
        </View>

        <Text style={{marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 1 }}>
        Training
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Certification in guided imagery is available. To be eligible, you must first earn your degree and obtain licensure as a mental health professional. Then, apply to the Academy for Guided Imagery. The course involves 33 hours of independent study and 150 hours of formal training, which you can complete in two years. You can opt to select a home-study module or participate in group study online.</Text>
        </View>






        <Text style={{ textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
        2. Progressive Muscle Relaxation (PMR)
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>With this type of meditation, the therapist instructs the client to tense a muscle group, hold the contraction for 15 seconds, and then release it while slowly exhaling. After a brief pause, the therapist addresses another muscle group. This process is repeated systematically, beginning with the toes and ascending to the head.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Muscles are gently tightened, not to the point of strain. After each pause, the client notes the sensory difference between tautness and relaxation. At the end of PMR, a client feels body-wide tranquility.</Text>
        </View>

        <Text style={{marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 1 }}>
        Applications
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Through PMR, clients gain self-awareness of muscle tension when under stress. Then, they can choose to relax tight muscles and quell unpleasant emotions, such as anxiety, anger, and frustration. Following are two examples.</Text>
        </View>
        {/* ============== Bullets ================== */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>When upset, a client habitually clenches their fists. After learning PMR, they can catch themselves, and release their agitation.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>A client suffers from chronic headaches. After mastering PMR, they can sense the initial tensing of their neck and shoulders. By pausing to relax the involved muscles, they avoid the pain cycle.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Additionally, PMR can alleviate panic attacks, social anxiety, PTSD, and insomnia.</Text>
        </View>






        <Text style={{ textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
        3. Hypnosis
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>This technique is similar to guided imagery. However, hypnosis emphasizes verbal suggestions, rather than sensory engagement. Therapists use this meditation technique to help clients adopt new habits, change behaviors, and relieve symptoms.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>First, the therapist leads the client into a “hypnotic trance,” a state of deep relaxation. Then, the client receives goal-oriented suggestions.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Initially, mental health professionals may dedicate entire sessions to hypnosis. Then, at subsequent visits, hypnosis occupies 15 minutes of treatment time. Once a client is fully versed in the technique, they can practice self-hypnosis independently.</Text>
        </View>

        <Text style={{marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 1 }}>
        Applications
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Some therapists make audio tapes for their patients. They may also use hypnosis in group therapy. Research shows that this meditation technique enhances cognitive behavioral therapy (CBT) for anxiety, phobias, addiction, and stress management.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>For example, for a client struggling to quit smoking, the therapist might state that the habit is no longer enjoyable. As a post-hypnotic suggestion, the counselor could plant the idea that whenever the patient reaches for a cigarette, the desire to smoke evaporates.</Text>
        </View>

        <Text style={{marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 1 }}>
        Training
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>After becoming a licensed mental health professional, you can obtain training at any of the following professional hypnosis organizations.</Text>
        </View>
        {/* ============== Bullets ================== */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>American Society of Clinical Hypnosis – To be eligible for training and certification by the ASCH, you must have a master’s degree in clinical psychology or counseling.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Hypnosis Motivation Institute – This college is accredited for teaching hypnosis therapy.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>3)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Milton H. Erikson Foundation – This federally supported non-profit corporation provides hypnosis training for mental health therapists worldwide.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>4)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Society for Clinical and Experimental Hypnosis – Members of this organization include psychologists, social workers, and psychiatrists.</Text>
        </View>






        <Text style={{ textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
        4. Mindfulness Meditation
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>This technique involves watching thoughts, emotions, and sensations, without reacting to them. Counselors specializing in CBT often teach mindfulness, to help clients control negative thinking.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>To instruct a client in mindfulness meditation, the therapist directs them to focus on a particular object. When thoughts cause attention to waver, the client observes them, like clouds floating by, without judgment. Then, they draw their mind back to the anchor. Examples of mental anchors for meditation are the sound of a ticking clock or a pleasing image.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Once a client becomes skilled in mindfulness meditation, they’re encouraged to maintain this stance throughout their daily lives. By calmly watching thoughts, patients acquire the ability to change their beliefs and behaviors.</Text>
        </View>

        <Text style={{marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 1 }}>
        Applications
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Mental health professionals use this meditation method to treat anxiety, PTSD, depression, eating disorders, panic attacks, suicidal ideation, addiction, poor self-image, and bipolar disorder. This technique works by bridging new neural networks in the brain.</Text>
        </View>




        <Text style={{ textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
        5. Focused Breathing
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>This type of meditation is also called paced respiration, alternate nostril breathing, and belly, abdominal, deep, slow, and diaphragmatic breathing. During deep inhalations, air expands the lungs, and the lower abdomen rises. Breathing is done slowly, gently, and smoothly.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>While following the breath, a meditator scans their body for tense areas, such as the jaw, lips, and shoulders. Then, during the out-breath, they sequentially release the tightness in each body region. While breathing in, they focus on the vitalizing sensation.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Alternate nostril breathing involves isolating the in-breath and out-breath, one nostril at a time. First, you close one nostril with your thumb, and breathe through the open nostril. Then, you switch the process. Using the same hand, close the other nostril with your index finger, and slowly inhale and exhale.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>You can also pair slow breathing with counting. The in-breath is shorter than the out-breath. For example, during the inhale, the meditator can steadily count to four. The out-breath is done to a count of eight.</Text>
        </View>

        <Text style={{marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 1 }}>
        Applications
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Physiologic benefits of paced respiration include heightened alertness, lower blood pressure, and slower heart rate. Similar to mindfulness meditation, this practice helps clients distance themselves from distressing thoughts and feelings.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Therapists use this meditation technique to treat patients with anxiety, panic attacks, and PTSD. Slow breathing also helps to control bipolar disorder, addiction, and insomnia.</Text>
        </View>
        









      </ScrollView>
    </View>
  )
}

export default Meditation;