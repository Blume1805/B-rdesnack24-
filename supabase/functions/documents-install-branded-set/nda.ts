import { Ctx, drawFlow } from "./helpers.ts";

export async function buildNdaPdf(ctx: Ctx): Promise<Uint8Array> {
  await drawFlow(
    ctx,
    "Bördesnack24 – Geheimhaltungsvereinbarung (NDA)",
    async () => ctx.pdf.addPage([595, 842]),
    [
      { type: "italic-note", text: "Vertraulich · Non-Disclosure-Agreement (Muster)" },
      { type: "italic-note", text: "„Dieses Non-Disclosure-Agreement ist ausschließlich als Muster und Vorschlag zu verstehen, um insbesondere kleinen und mittelständischen Unternehmen Anhaltspunkte für Regelungen zu geben, die im Falle von Geschäftsanbahnungen zum Schutz der wechselseitigen Interessen und insbesondere von Geschäftsgeheimnissen vereinbart werden sollten. Er wurde von Praktikern aus dem DIHK-Rechtsausschuss erarbeitet und soll als Formulierungs- und Checkliste dienen. Mögliche Rechtsentwicklungen können weder berücksichtigt noch vorausgesehen werden. Jede Haftung für den Gebrauch, auch für leichte Fahrlässigkeit, wird hiermit ausgeschlossen. Wir weisen explizit darauf hin, dass das Muster keinesfalls einen individuellen und maßgeschneiderten Vertrag ersetzt. Dafür sollte in jedem Fall ein Rechtsanwalt hinzugezogen werden.\"" },

      { type: "h2", text: "Geheimhaltungsvereinbarung" },
      { type: "p", text: "zwischen" },
      { type: "p", text: "X-Unternehmen, [Adresse, Register] (nachfolgend „X\" genannt)" },
      { type: "p", text: "und" },
      { type: "p", text: "Y-Unternehmen, [Adresse, Register] (nachfolgend „Y\" genannt)" },
      { type: "p", text: "(X und Y im Folgenden einzeln als „Partei\" und gemeinsam als „Parteien\" bezeichnet)" },

      { type: "h2", text: "Präambel" },
      { type: "italic-note", text: "[Kurze Beschreibung des Geschäftsschwerpunkts von X und Y]" },
      { type: "p", text: "Die Parteien beabsichtigen, eine mögliche geschäftliche Zusammenarbeit zu sondieren, und zwar in Bezug auf [kurze Beschreibung der Zusammenarbeit, z. B. Projektname, Lieferungen, Leistungen oder zu erwerbende Produkte] und ggf. diese Zusammenarbeit im Anschluss zu realisieren (nachfolgend als „Zweck\" bezeichnet)." },
      { type: "p", text: "In Bezug auf diese Aktivitäten wird davon ausgegangen, dass die Parteien einander möglicherweise Zugang zu vertraulichen Informationen gewähren. Um den Missbrauch solcher vertraulichen Informationen auszuschließen, vereinbaren die Parteien diese Geheimhaltungsvereinbarung (nachfolgend als „Vereinbarung\" bezeichnet)." },

      { type: "h2", text: "1. Definitionen" },
      { type: "p", text: "1.1. „Vertrauliche Informationen\" sind Informationen jeglicher Art (z. B. technische oder geschäftliche Daten, Unterlagen oder Kenntnisse/Know-How) und/oder Prototypen/Muster, die die Parteien oder ihre Verbundenen Unternehmen im Zusammenhang mit dem vorgenannten Zweck offenbaren oder die sie im Zusammenhang mit dem Zweck erfahren (z. B. bei Werksbesichtigungen), unabhängig davon, ob diese Informationen Eigentum der Parteien, eines mit ihnen Verbundenen Unternehmens oder Dritter sind, und unabhängig von Art und Form der Übermittlung oder Kenntnisnahme dieser Informationen, einschließlich einer direkten Offenlegung von Informationen eines Verbundenen Unternehmens an den „Empfänger\"." },
      { type: "p", text: "Vertrauliche Informationen umfassen auch sämtliche hiervon erstellten Kopien, selbst erstellte Materialien und Daten sowie alle Auszüge und Zusammenfassungen davon." },
      { type: "p", text: "1.2. „Verbundene Unternehmen\" sind juristische Personen, die über eine Partei dieser Vereinbarung eine direkte oder indirekte Kontrolle ausüben („Muttergesellschaften\"), oder die direkt oder indirekt von einer Partei oder ihrer Muttergesellschaft kontrolliert werden. Für die Zwecke dieser Definition bedeutet „Kontrolle\" oder „kontrollieren\", dass direkt oder indirekt mehr als 50 % der Aktien oder Stimmrechte gehalten werden." },
      { type: "p", text: "1.3. Offenlegende Partei ist diejenige Partei, die Vertrauliche Informationen selbst oder durch ein Verbundenes Unternehmen der jeweils anderen Partei offenbart oder in sonstiger Weise zugänglich macht." },
      { type: "p", text: "1.4. Empfänger ist diejenige Partei, die Vertrauliche Informationen durch die Offenlegende Partei oder ein mit jener Verbundenes Unternehmen erhält oder in sonstiger Weise erfährt." },

      { type: "h2", text: "2. Pflicht zur Geheimhaltung; beschränkte Nutzung; Verbot des Reverse Engineering" },
      { type: "p", text: "2.1. Jede Partei verpflichtet sich, die Vertraulichen Informationen der jeweils anderen Partei" },
      { type: "li", text: "a) ausschließlich für den in der Präambel genannten Zweck zu verwenden;" },
      { type: "li", text: "b) geheim zu halten und dabei die gleiche Sorgfalt anzuwenden, wie bei eigenen Informationen von ähnlicher Bedeutung, zumindest aber ein angemessenes Maß an Sorgfalt (opt.: und in Übereinstimmung mit den Maßnahmen gemäß Anhang X; opt.: und eine Weiterleitung Vertraulicher Informationen nur an die Mitarbeiter vorzunehmen, die für den Zweck der Vereinbarung notwendigerweise mitwirken müssen — need-to-know-Prinzip);" },
      { type: "li", text: "c) nur dann an Verbundene Unternehmen weiterzugeben, soweit dies zur Erreichung des Zwecks erforderlich ist, sofern diese Verbundenen Unternehmen die Geheimhaltungspflicht gemäß den Bestimmungen dieser Vereinbarung kennen, eine Weiterleitung Vertraulicher Informationen nur an die Mitarbeiter erfolgt, die zur Erreichung des Zwecks notwendigerweise mitwirken müssen (Need-to-know-Prinzip) und soweit das betreffende Verbundene Unternehmen kein Wettbewerber der Offenlegenden Partei ist." },
      { type: "li", text: "d) nicht an Dritte weiterzugeben, gleich in welcher Form." },
      { type: "p", text: "Vertrauliche Informationen können ausnahmsweise an Dritte weitergegeben werden, soweit die Offenlegung zur Erreichung des Zwecks dieser Vereinbarung erforderlich ist und" },
      { type: "sub-li", text: "der jeweilige Dritte gesetzlichen Berufsgeheimnispflichten unterliegt, die mindestens so streng sind wie diese Vereinbarung, und der betreffende Dritte kein Wettbewerber der Offenlegenden Partei ist;" },
      { type: "sub-li", text: "der Dritte eine Vertraulichkeitsvereinbarung abgeschlossen hat, die in ihrem Regelungsgehalt den Vorgaben dieser Vereinbarung entspricht, und es sich bei dem Dritten nicht um einen Wettbewerber der Offenlegenden Partei handelt; oder" },
      { type: "sub-li", text: "die Offenlegende Partei der Weitergabe schriftlich zugestimmt hat." },
      { type: "p", text: "2.2. Reverse Engineering (§ 3 Abs. 1 Nr. 2 Deutsches GeschGehG) ist nicht erlaubt." },

      { type: "h2", text: "3. Ausnahmen" },
      { type: "p", text: "3.1. Die Verpflichtungen aus Ziffer 2 dieser Vereinbarung gelten nicht für Vertrauliche Informationen, die" },
      { type: "li", text: "a) dem Empfänger bereits vor dem Zeitpunkt dieser Vereinbarung ohne Verpflichtung zur Geheimhaltung rechtmäßig bekannt oder überlassen waren;" },
      { type: "li", text: "b) zum Zeitpunkt der Offenlegung bereits öffentlich bekannt sind oder später in der Öffentlichkeit bekannt werden, ohne dass der Empfänger gegen diese Vereinbarung verstoßen hat;" },
      { type: "li", text: "c) der Empfänger rechtmäßig von einem Dritten erhalten hat, es sei denn, dem Empfänger ist bekannt oder hätte bekannt sein müssen, dass der Dritte durch seine Mitteilung selbst gegen Geheimhaltungsverpflichtungen verstößt, die er gegenüber der Offenlegenden Partei übernommen hat;" },
      { type: "li", text: "d) vom Empfänger unabhängig und ohne Verwendung oder Rückgriff auf die Vertraulichen Informationen entwickelt wurden; oder" },
      { type: "li", text: "e) von der Offenlegenden Partei im konkreten Fall zur Veröffentlichung schriftlich freigegeben wurden." },
      { type: "p", text: "3.2. Die Partei, die sich auf eine oder mehrere der vorgenannten Ausnahmen beruft, trägt die Beweislast für das Vorliegen der entsprechenden Bedingungen." },
      { type: "p", text: "3.3. Jede Partei hat das Recht, die Annahme von Informationen vor deren Überlassung zu verweigern. Informationen, die trotz dieser Ablehnung übermittelt werden, fallen nicht unter die Geheimhaltungspflicht dieser Vereinbarung." },

      { type: "h2", text: "4. Offenlegungspflicht" },
      { type: "p", text: "4.1. Der Empfänger darf die Vertraulichen Informationen offenbaren, wenn er durch eine behördliche oder eine gerichtliche Anordnung oder aufgrund zwingenden Rechts dazu verpflichtet ist. In diesem Fall benachrichtigt der Empfänger unverzüglich die Offenlegende Partei über eine solche Verfügung und/oder gerichtliche Entscheidung und/oder Gesetz, soweit dies rechtlich zulässig ist, und unterstützt die Offenlegende Partei dabei, sicherzustellen, dass ihre Vertraulichen Informationen vertraulich behandelt werden." },
      { type: "p", text: "4.2. Vertrauliche Informationen der Offenlegenden Partei, die gemäß 4.1 an eine Behörde oder ein Gericht weitergegeben werden, müssen, soweit vernünftigerweise möglich, als „vertraulich\" gekennzeichnet werden." },

      { type: "h2", text: "5. Gewährleistungs- und Haftungsausschluss" },
      { type: "p", text: "Die Parteien sind sich einig, dass alle Vertraulichen Informationen unter dieser Vereinbarung „wie besehen\" zur Verfügung gestellt werden. Es wird ausdrücklich keine Haftung dafür übernommen, dass die Vertraulichen Informationen vollständig, aktuell, richtig, frei von Mängeln oder Rechten Dritter sind oder für den vereinbarten Zweck oder andere Zwecke des Empfängers nützlich sind." },

      { type: "h2", text: "6. Ausschluss von Lizenzrechten" },
      { type: "p", text: "6.1. Alle Vertraulichen Informationen, die dem Empfänger offengelegt werden, bleiben Eigentum der Offenlegenden Partei bzw. ihrer Verbundenen Unternehmen bzw. des Dritten." },
      { type: "p", text: "6.2. Durch diese Vereinbarung werden weder ausdrücklich noch stillschweigend Lizenzen und/oder andere Rechte, insbesondere zur Benutzung, gewährt, noch entstehen den Parteien daraus Verpflichtungen zur Erteilung oder Übertragung solcher Rechte. Insbesondere ist der Empfänger nicht berechtigt, Patente oder anderen gesetzlichen Schutz gleich in welchem Land zu beantragen, die auf einer Vertraulichen Information der Offenlegenden Partei beruhen oder diese nutzen. Vorbehaltlich der Bestimmungen in Ziffer 6.3.2 hat die Offenlegende Partei das Recht auf kostenfreie Übertragung solcher Rechte gegenüber dem Empfänger. Ist eine solche Übertragung rechtlich unmöglich, hat die Offenlegende Partei Anspruch auf eine exklusive weltweite Lizenz. Im Übrigen können durch die Offenlegung Vertraulicher Informationen keine Vorbenutzungsrechte des Empfängers gegenüber der Offenlegenden Partei geltend gemacht werden." },
      { type: "p", text: "6.3. Soweit die Vertragsparteien Verhandlungen über die Aufnahme von Geschäftsbeziehungen in Workshopformaten, besetzt mit Vertretern beider Seiten, führen, die eine offene Kommunikation erfordern, (nachfolgend als „Workshop\" bezeichnet) gelten zusätzlich zu den Ziffern 6.1 und 6.2 folgende Bestimmungen:" },
      { type: "p", text: "6.3.1. Keine der Parteien ist berechtigt, die Beiträge der anderen Partei in welcher Form auch immer selbst oder durch Dritte zu nutzen, oder diese in anderer geschäftlicher oder wissenschaftlicher Form zu verwenden (z. B. für die Eintragung eines Patents oder eines Gebrauchsmusters oder eine andere Form des gewerblichen Rechtsschutzes) oder für die Vergabe von eigenen Lizenzen oder solchen durch Dritte." },
      { type: "p", text: "6.3.2. Erfindungen, Patente, Gebrauchsmuster, Designrechte, Urheberrechte (einschließlich, z. B. Software), Topographierechte und andere Rechte des geistigen Eigentums oder Know-How, insbesondere auch nicht patentierte technische Informationen, die aus und/oder im Zusammenhang mit dem Workshop von den Vertragsparteien oder ihren Mitarbeitern gemeinsam geschaffen werden, unterliegen den Bedingungen eines gesonderten Vertrags, den die Parteien nach Treu und Glauben aushandeln." },

      { type: "h2", text: "7. Haftung für Verbundene Unternehmen und Berater/Auftragnehmer" },
      { type: "p", text: "Der Empfänger übernimmt die Gewähr dafür, dass seine Verbundenen Unternehmen — selbst wenn ein Verbundenes Unternehmen den Status eines Verbundenen Unternehmens verliert —, Vertreter, Berater, Auftragnehmer, Mitarbeiter und andere, denen die Vertraulichen Informationen offenbart wurden, die Bestimmungen dieser Vereinbarung einhalten werden." },

      { type: "h2", text: "8. Vertragslaufzeit" },
      { type: "p", text: "8.1. Diese Vereinbarung tritt mit dem Datum der Unterschrift der zuletzt unterzeichnenden Partei in Kraft und gilt für einen Zeitraum von [___] Jahren." },
      { type: "p", text: "8.2. Die Verpflichtungen aus dieser Vereinbarung in Bezug auf die Vertraulichen Informationen, die im Rahmen der Laufzeit der Vereinbarung offenbart wurden, bleiben jedoch für einen Zeitraum von [___] Jahren nach Beendigung weiter bestehen. Soweit für Vertrauliche Informationen (z. B. Geschäftsgeheimnisse) gesetzliche Schutzbestimmungen gelten, verlängert sich die nachvertragliche Geheimhaltungspflicht gemäß diesen gesetzlichen Bestimmungen." },

      { type: "h2", text: "9. Rückgabe vertraulicher Informationen" },
      { type: "p", text: "9.1. Nach Aufforderung der Offenlegenden Partei sind sämtliche Vertraulichen Informationen in verkörperter und/oder elektronischer Form sowie sämtliche Kopien nach deren Wahl entweder zurückzugeben oder zu vernichten." },
      { type: "p", text: "Der Empfänger ist verpflichtet, innerhalb von vierzehn (14) Tagen nach Zugang der entsprechenden Aufforderung entweder" },
      { type: "li", text: "(i) die Vertraulichen Informationen zurückzugeben oder" },
      { type: "li", text: "(ii) deren erfolgte Vernichtung schriftlich zu bestätigen." },
      { type: "p", text: "9.2. Die Rückgabe-/Vernichtungspflicht gilt nicht für" },
      { type: "li", text: "(i) automatisch im Rahmen der gewöhnlichen Datensicherung des Empfängers erzeugte Computer Back-up- oder Archivkopien der Vertraulichen Informationen der Offenlegenden Partei, vorausgesetzt, dass diese Kopien regulären Benutzern nicht weiter zugänglich sind und zu keinem anderen Zweck als zur Sicherung der Daten bzw. der Archivierung verwendet werden sowie für" },
      { type: "li", text: "(ii) Vertrauliche Informationen, die zu Beweis- oder Nachweiszwecken oder zur Erfüllung von gesetzlichen Archivierungs- und Aufbewahrungspflichten aufbewahrt werden müssen." },
      { type: "li", text: "(iii) Vertrauliche Informationen, deren Rückgabe oder Vernichtung wirtschaftlich oder technisch unmöglich ist, wofür der Empfänger beweispflichtig ist, vorausgesetzt jedoch, dass für diese gemäß (i), (ii) und (iii) dieses Absatzes zurückbehaltenen Vertraulichen Informationen und/oder deren Kopien die Bestimmungen dieser Vereinbarung gelten, jedoch mit einer unbefristeten Geheimhaltungspflicht." },

      { type: "h2", text: "10. Anwendbares Recht" },
      { type: "p", text: "Diese Vereinbarung, einschließlich der folgenden Streitbeilegungsklausel, unterliegt dem Recht der Bundesrepublik Deutschland unter Ausschluss der Normen des internationalen Privatrechts. Das Wiener UN-Übereinkommen über Verträge über den internationalen Warenkauf (CISG) kommt nicht zur Anwendung." },

      { type: "h2", text: "11. Streitbeilegung / Gerichtsstand" },
      { type: "p", text: "11.1. Alle Streitigkeiten, die sich aus oder im Zusammenhang mit dieser Vereinbarung oder ihrer Gültigkeit ergeben, werden nach der Schiedsgerichtsordnung der …X… (vgl. Vorschläge des DIHK unter https://www.dihk.de/de/themen-und-positionen/recht-in-der-wirtschaft/aussergerichtliche-streitbeilegung/schiedsgerichtsbarkeit-2114) unter Ausschluss des ordentlichen Rechtsweges endgültig entschieden." },
      { type: "p", text: "11.2. Das Schiedsgericht besteht aus [bitte geben Sie „einen Einzelschiedsrichter\" oder „drei Mitglieder\" ein]." },
      { type: "p", text: "11.3. Der Schiedsort ist [bitte benennen Sie die Stadt, Deutschland]." },
      { type: "p", text: "11.4. Die Sprache des Schiedsverfahrens ist Deutsch [opt.: English]." },
      { type: "p", text: "11.5. Es gilt deutsches Recht (s. Ziffer 10 dieser Vereinbarung)." },

      { type: "h2", text: "12. Übertragbarkeit" },
      { type: "p", text: "Keine der Parteien ist ohne vorherige schriftliche Zustimmung der anderen Partei berechtigt, sich aus dieser Vereinbarung ergebende Rechte und Pflichten an Dritte zu übertragen oder abzutreten." },

      { type: "h2", text: "13. Sonstige Bestimmungen" },
      { type: "p", text: "13.1. Diese Vereinbarung stellt keine Verpflichtung für die Parteien dar, eine Zusammenarbeit und/oder eine andere Geschäftsbeziehung einzugehen oder bestimmte Informationen offenzulegen." },
      { type: "p", text: "13.2. Es liegen keine weiteren schriftlichen oder mündlichen Vereinbarungen über den Gegenstand dieser Vereinbarung vor. Änderungen oder Ergänzungen dieser Vereinbarung unterliegen der Schriftform. Auf dieses Schriftformerfordernis kann nur schriftlich durch die Parteien verzichtet werden." },
      { type: "p", text: "13.3. Der Export Vertraulicher Informationen, die im Rahmen dieser Vereinbarung offengelegt werden, könnte gesetzlich verboten sein oder einer staatlichen Genehmigung unterliegen. Jede Partei verpflichtet sich, die jeweils auf die Verwendung und Weitergabe von im Rahmen dieser Vereinbarung ausgetauschten Vertraulichen Informationen anwendbaren nationalen und internationalen Gesetze und sonstigen Rechtsvorschriften zu beachten, insbesondere die geltenden Ausfuhrkontrollbestimmungen und Sanktionsregelungen." },
      { type: "p", text: "13.4. Sollten Bestimmungen dieser Vereinbarung nichtig, ungültig oder aus rechtlichen Gründen nicht bestimmungsgemäß durchsetzbar sein oder werden, wird dadurch die Gültigkeit der übrigen Bestimmungen nicht berührt. Die Vertragsparteien ersetzen die nichtige, ungültige oder nicht durchsetzbare Bestimmung durch eine rechtsgültige Bestimmung, die dem wirtschaftlichen Zweck der ursprünglichen Bestimmung weitestgehend entspricht." },
      { type: "space", height: 12 },
      { type: "placeholder", label: "Ort, Datum", value: "[Ort, TT.MM.JJJJ]" },
      { type: "placeholder", label: "Unterschrift Partei X", value: "[Name, Funktion, Unterschrift]" },
      { type: "placeholder", label: "Unterschrift Partei Y", value: "[Name, Funktion, Unterschrift]" },
    ],
    { showLegend: true },
  );
  return await ctx.pdf.save();
}

