<template>
    <div class="prose mx-auto fl-px-2/8">
        <h1 id="headline">Route & Zeitplan</h1>
        <div class="overflow-auto">
            <table class="min-w-xl">
                <thead>
                    <tr>
                        <th>Von</th>
                        <th>Bis</th>
                        <th>Was</th>
                        <th>Ort / Strecke</th>
                        <th class="text-right">Entfernung</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12:00</td>
                        <td>13:00</td>
                        <td>Auftaktkundgebung</td>
                        <td>Hauptwache</td>
                        <td class="text-right">-</td>
                    </tr>
                    <tr>
                        <td>13:00</td>
                        <td>14:45</td>
                        <td>Abschnitt 1</td>
                        <td>Hauptwache -> Platz der deutschen Einheit</td>
                        <td class="text-right">2,5km</td>
                    </tr>
                    <tr>
                        <td>14:45</td>
                        <td>15:15</td>
                        <td>Zwischenkundgebung</td>
                        <td>Platz der dt. Einheit</td>
                        <td class="text-right">-</td>
                    </tr>
                    <tr>
                        <td>15:15</td>
                        <td>16:00</td>
                        <td>Abschnitt 2</td>
                        <td>Platz der deutschen Einheit -> Baseler Platz</td>
                        <td class="text-right">1,6km</td>
                    </tr>
                    <tr>
                        <td>16:00</td>
                        <td>16:30</td>
                        <td>Zwischenkundgebung</td>
                        <td>Baseler Platz</td>
                        <td class="text-right">-</td>
                    </tr>
                    <tr>
                        <td>16:30</td>
                        <td>19:00</td>
                        <td>Abschnitt 3</td>
                        <td>Baseler Platz -> Hauptwache</td>
                        <td class="text-right">3,3km</td>
                    </tr>
                    <tr>
                        <td>19:00</td>
                        <td>20:00</td>
                        <td>Abschlusskundgebung</td>
                        <td>Hauptwache</td>
                        <td class="text-right">-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <iframe
            class="w-full min-h-64 h-screen max-h-128"
            loading="lazy"
            src="https://www.google.com/maps/d/embed?mid=1NtOrjMoQsMUF7AqniHsSzOFFWFD7NIQ&ehbc=2E312F"
            title="Save the Rave Route"
        ></iframe>
    </div>
</template>
