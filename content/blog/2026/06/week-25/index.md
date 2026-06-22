---
title: "Building HexBox, 2026 Week 25 (Automating Backups & True Data Ownership)"
date: 2026-06-20
author: Steve Grice
tags:
  - self-hosting
  - hardware
  - backups
  - rclone
  - automation
  - build-in-public
---

{% youtube "lklhxA9XpOQ" %}

## 1. Something Useful: The Automated Backup Guide

- Released a complete guide on automating backups for your self-hosted server using Rclone and Cron.
- Walked through connecting Google Drive and OneDrive, compressing the Immich library, and writing a rotation script.
- Showed how to set it and forget it, so your server backs itself up automatically at 5 AM without you lifting a finger.

Here's the backup script from the video:

```bash
#!/usr/bin/env bash
set -euo pipefail

# Feel free to change these:
SOURCE="$HOME/services/immich/library"
DEST="google-drive:backups"
BACKUPS_DIR="$HOME/backups"
KEEP=5
# You shouldn't need to change anything below this line.

DATE=$(date +%Y-%m-%d-%H%M)
ARCHIVE="library-$DATE.tgz"
BACKUP_PATH="$BACKUPS_DIR/$ARCHIVE"

mkdir -p "$BACKUPS_DIR"

# Create archive
tar czvf "$BACKUP_PATH" "$SOURCE"

# Upload
echo "Copying backup to $DEST"
rclone copy "$BACKUP_PATH" "$DEST"

# ---- Cleanup remote (keep newest N) ----
echo "Deleting old remote backups"
files=$(rclone lsf "$DEST" --files-only | sort -r)

i=0
for file in $files; do
    i=$((i + 1))

    if [ "$i" -le "$KEEP" ]; then
        continue
    fi

    echo "Deleting remote: $file"
    rclone deletefile "$DEST/$file"
done

# Clean older local archives if you store them permanently
echo "Deleting old local backups"
ls -1t "$BACKUPS_DIR"/*.tgz | tail -n +$((KEEP + 1)) | xargs rm -f
```

## 2. What I Worked On This Week

- Followed up on last week's Immich guide by tackling the hardest part of self-hosting: the fear of data loss.
- Wrote and tested a bash script to handle tar compression, remote upload via Rclone, and automatic rotation of the last 5 backups.
- Debugged authorization headaches with OneDrive and documented the exact workaround so nobody else has to waste time on it.
- Proved that true data ownership doesn't mean manually dragging files to a hard drive every Sunday.

## 3. What's Next

- Continuing to push the HexBox Photos Edition.
- Exploring what it takes to make this entire backend backup flow a simple, one-click experience for the final HexBox.

## 4. Freeform / Ramble

Last week I showed how to ditch Google Photos and run Immich on your own hardware. But the moment you take your data offline, a new anxiety creeps in: what if the drive dies?

Most people think backing up photos is something you have to remember to do. They fail not because of storage space, but because human consistency is a terrible safety net. I used to worry about losing my files too. 

So this week, I built a system that runs on its own. No clicking around, no manual uploads, no reminders. I wired up Rclone, wrote a bash script to compress the photo library and rotate old versions, and handed it off to Cron. Now, it just works in the background at 5 AM while I sleep.

This is the reality of taking back tech. You don't just own your hardware; you own the systems that protect it. And when those systems run autonomously, that's when you finally have peace of mind.

## Thank you.

- Thanks for following along.
- Sign up for updates if you want to follow progress as HexBox gets closer to release.
	- YouTube: [youtube.com/@PageKey](https://youtube.com/@PageKey)
	- Email list: [https://pagekey.io/hexbox](https://pagekey.io/hexbox)
- Remember: Transparency + control = better systems for everyone.
