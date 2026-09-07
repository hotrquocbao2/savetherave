<template>
    <div class="prose mx-auto">
        <h1>Route & Zeitplan</h1>
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
                    <td>14:15</td>
                    <td>Abschnitt 1</td>
                    <td>Hauptwache -> Theater Tunnel</td>
                    <td class="text-right">1,85km</td>
                </tr>
                <tr>
                    <td>14:15</td>
                    <td>14:00</td>
                    <td>Abschnitt 2 (Durchquerung)</td>
                    <td>Theater Tunnel</td>
                    <td class="text-right">650m</td>
                </tr>
                <tr>
                    <td>15:00</td>
                    <td>15:45</td>
                    <td>Abschnitt 3</td>
                    <td>Theater Tunnel -> Baseler Platz</td>
                    <td class="text-right">800m</td>
                </tr>
                <tr>
                    <td>15:45</td>
                    <td>16:15</td>
                    <td>Zwischenkundgebung</td>
                    <td>Baseler Platz</td>
                    <td class="text-right">-</td>
                </tr>
                <tr>
                    <td>16:15</td>
                    <td>17:00</td>
                    <td>Abschnitt 4</td>
                    <td>Baseler Platz -> Platz der dt. Einheit</td>
                    <td class="text-right">1,75km</td>
                </tr>
                <tr>
                    <td>17:00</td>
                    <td>17:30</td>
                    <td>Zwischenkundgebung</td>
                    <td>Platz der dt. Einheit</td>
                    <td class="text-right">-</td>
                </tr>
                <tr>
                    <td>17:30</td>
                    <td>19:00</td>
                    <td>Abschnitt 5</td>
                    <td>Platz der dt. Einheit -> Opernplatz -> Hauptwache</td>
                    <td class="text-right">2,9km</td>
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
            src="https://www.google.com/maps/d/embed?mid=1LyJHPXNLB8g2KwfeU8aSkVeKvwgxLJw&ehbc=2E312F"
            title="Save the Rave Route"
            loading="lazy"
        />
    </div>
</template>
