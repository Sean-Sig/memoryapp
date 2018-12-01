<template>
    <section>
        <b-tabs>
            <b-tab-item label="Memories">
                <b-table
                    :data="data"
                    :columns="columns"
                    :selected.sync="selected"
                    focusable>
                </b-table>
            </b-tab-item>

            <b-tab-item label="Selected">
              <p>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
    export default {
        data() {
            const data = [
                { 'Entry_#': 1, 'topic_mem': 'First Date', 'Shard_mem': 'Yes', 'date': '2016-10-15 13:43:27', 'rating_mem': '😎😎😎😎' },
                { 'Entry_#': 2, 'topic_mem': 'Dog', 'Shard_mem': 'Yes', 'date': '2016-12-15 06:00:53', 'rating_mem': '😊 😊 😊' },
                { 'Entry_#': 3, 'topic_mem': 'Break Up', 'Shard_mem': 'No', 'date': '2016-04-26 06:26:28', 'rating_mem': '😢' },
                { 'Entry_#': 4, 'topic_mem': 'Sick', 'Shard_mem': 'No', 'date': '2016-04-10 10:28:46', 'rating_mem': '☹️ ☹️' },
                { 'Entry_#': 5, 'topic_mem': 'Hawaii', 'Shard_mem': 'Yes', 'date': '2016-12-06 14:38:38', 'rating_mem': '🤩🤩🤩🤩🤩' },
                { 'Entry_#': 6, 'topic_mem': 'Jazz Game', 'Shard_mem': 'Yes', 'date': '2016-12-15 06:00:53', 'rating_mem': '😊 😊 😊' },
                { 'Entry_#': 7, 'topic_mem': 'Fall', 'Shard_mem': 'No', 'date': '2016-04-26 06:26:28', 'rating_mem': '😢' },
                { 'Entry_#': 8, 'topic_mem': 'Bored', 'Shard_mem': 'No', 'date': '2016-04-10 10:28:46', 'rating_mem': '☹️ ☹️' },
            ]

            return {
                data,
                selected: data[1],
                columns: [
                    {
                        field: 'Entry_#',
                        label: 'Entry#',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'topic_mem',
                        label: 'Topic',
                    },
                    {
                        field: 'Shard_mem',
                        label: 'Shared',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'rating_mem',
                        label: 'Rating',
                    }
                ]
            }
        }
    }
</script>
